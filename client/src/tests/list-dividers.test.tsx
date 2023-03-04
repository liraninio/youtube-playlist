
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
} from "@testing-library/react";
import ListDividers from '../shared/list-dividers';

describe("ListDividers", () => {
    it("renders the correct number of items and checks if the right item is selected", () => {
      const items = [
        { id: "1", title: "Item 1", duration: "1:23", isPlaying: false },
        { id: "2", title: "Item 2", duration: "4:56", isPlaying: true },
        { id: "3", title: "Item 3", duration: "2:34", isPlaying: false },
      ];
      const maxTitleLen = 10;
      const onDelete = jest.fn();
  
      render(
        <ListDividers
          items={items}
          maxTitleLen={maxTitleLen}
          onDelete={onDelete}
        />
      );
      //console.log(screen.debug());
      const renderedItems = screen.getAllByRole("listItem");
      expect(renderedItems.length).toBe(items.length);
  
      const item2Button = screen.getByLabelText("Item 2");
      expect(item2Button).toHaveClass("Mui-selected");
    });
  });