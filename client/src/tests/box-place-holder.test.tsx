import { BoxPlaceHolderProps } from "../models/types";
import BoxPlaceHolder from "../shared/box-place-holder";

import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
describe("BoxPlaceHolder", () => {
    it("renders the text passed as props", () => {
      const text: string = "Hello, world!";
      const props: BoxPlaceHolderProps = {
        text,
        style: { width: "700px" },
      };
      render(<BoxPlaceHolder {...props} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });