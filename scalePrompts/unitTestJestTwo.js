import React, { useState, useEffect } from "react";
import { render, waitForElement } from "@testing-library/react";

function useMountEffect(onMountFunction) {
  return useEffect(onMountFunction, []);
}

const Component = () => {
  const [count, setCount] = useState(0);

  useMountEffect(() => {
    setCount(count + 1);
  });

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

it("should increment the count on mount", async () => {
  const { getByText } = render(<Component />);

  expect(getByText("Count: 0")).toBeInTheDocument();

  await waitForElement(() => getByText("Count: 1"));

  expect(getByText("Count: 1")).toBeInTheDocument();
});

it("should not re-render when the count is incremented", async () => {
  const { getByText } = render(<Component />);

  expect(getByText("Count: 0")).toBeInTheDocument();

  setCount(1);

  await waitForElement(() => getByText("Count: 1"));

  expect(getByText("Count: 1")).toBeInTheDocument();

  expect(getByText("Count: 0")).not.toBeInTheDocument();
});

it("should handle errors gracefully", async () => {
  const onMountFunction = () => {
    throw new Error("An error occurred");
  };

  try {
    render(<Component onMountFunction={onMountFunction} />);
    expect(false).toBe(true); // This should never happen
  } catch (error) {
    expect(error.message).toEqual("An error occurred");
  }
});

// ...
