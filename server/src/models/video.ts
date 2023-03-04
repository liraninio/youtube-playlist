export class Video {
  id: string;
  title: string;
  duration: string;
  constructor(id: string, title: string, duration: string) {
    this.id = id;
    this.title = title;
    this.duration = duration;
  }
}

export type YoutubeVideos = {
  items: {
    contentDetails: {
      duration: string;
    };
    snippet: {
      title: string;
    };
  }[];
};
