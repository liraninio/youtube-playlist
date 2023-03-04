import fetch from "node-fetch";
import { Video } from "../models/video";
import { YoutubeVideos } from "../models/video";
import { getDurationTimeFormat } from "../handlers/text-handler";

const YOUTUBE_API_KEY = "AIzaSyAxz_4WWmZy6HhEMNzHmh9EyNDYTek72Lw";

const fetchingYoutubeData = async (videoId: string): Promise<YoutubeVideos> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch search results. Response status: ${response.status}`
      );
    }
    const data: YoutubeVideos = (await response.json()) as YoutubeVideos;
    return data;
  } catch (error) {
    return handleErrorAsync(
      error,
      `An error occurred while fetching data for video with ID ${videoId}`
    );
  }
};

export const getYouTubeVideoById = async (videoId: string): Promise<Video> => {
    try {
      return fetchingYoutubeData(videoId)
        .then((data) => {
          if (!data || !data.items || data.items.length === 0) {
            return handleErrorAsync(
              new Error(`No search results found for query: ${videoId}`),
              ""
            );
          }
          const durationFormatted: string = getDurationTimeFormat(
            data.items[0].contentDetails.duration
          );
          const title: string = data.items[0].snippet.title;
          return new Video(videoId, title, durationFormatted);
        })
        .catch((error) => {
          console.error(error);
          return handleErrorAsync(error, "Error fetching data");
        });
    } catch (error) {
        console.error(error);
      return handleErrorAsync(error, "Error fetching data");
    }
  };
