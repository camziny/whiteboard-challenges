import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import CreateIntentComponent from "./CreateIntentComponent";

jest.mock("axios");

describe("CreateIntentComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    render(<CreateIntentComponent />);
    // Assert the component renders correctly
    expect(screen.getByTestId("create-intent-component")).toBeInTheDocument();
  });

  it("should create a new intent with examples", async () => {
    const mockIntent = {
      name: "greeting",
      examples: ["Hi", "Hello", "Hey"],
    };

    axios.post.mockResolvedValueOnce({ data: mockIntent });

    render(<CreateIntentComponent />);

    const intentNameInput = screen.getByTestId("intent-name-input");
    const exampleInput = screen.getByTestId("example-input");
    const addButton = screen.getByTestId("add-button");
    const createButton = screen.getByTestId("create-button");

    fireEvent.change(intentNameInput, { target: { value: mockIntent.name } });

    fireEvent.change(exampleInput, {
      target: { value: mockIntent.examples[0] },
    });
    fireEvent.click(addButton);

    fireEvent.change(exampleInput, {
      target: { value: mockIntent.examples[1] },
    });
    fireEvent.click(addButton);

    fireEvent.change(exampleInput, {
      target: { value: mockIntent.examples[2] },
    });
    fireEvent.click(addButton);

    fireEvent.click(createButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("/nccb/createIntent", mockIntent);
    });

    // Assert that the new intent is displayed or handled appropriately
    // e.g., displaying a success message or navigating to a different page
  });
});
