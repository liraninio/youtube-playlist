import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
} from "@testing-library/react";
import SearchBar from '../shared/search-bar';


describe("SearchBar component", () => {
    test("should call onSearch with the query when the search button is clicked", () => {
      const onSearchMock = jest.fn();
      const placeholder = "Add...";
      const searchBtnName = "Add";
      const { getByPlaceholderText, getByText } = render(
        <SearchBar
          onSearch={onSearchMock}
          placeholder={placeholder}
          searchBtnName={searchBtnName}
        />
      );
  
      const inputElement = getByPlaceholderText(placeholder);
      const searchButtonElement = getByText(searchBtnName);
  
      // Simulate typing a search query into the input field
      fireEvent.change(inputElement, { target: { value: "Video id testing" } });
  
      // Simulate clicking the search button
      fireEvent.click(searchButtonElement);
  
      // Expect the onSearch callback to have been called with the search query
      expect(onSearchMock).toHaveBeenCalledWith("Video id testing");
    });
  });