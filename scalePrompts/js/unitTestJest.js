import React, { useState, useEffect } from "react";
import { render, cleanup, act } from "@testing-library/react";

function useMountEffect(onMountFunction) {
  return useEffect(onMountFunction, []);
}

describe("useMountEffect", () => {
  it("should call the onMountFunction once when the component mounts", () => {
    const onMountFunction = jest.fn();
    const [count, setCount] = useState(0);

    const Wrapper = () => {
      useMountEffect(() => {
        setCount(count + 1);
      });

      return <div>Count: {count}</div>;
    };

    render(<Wrapper />);
    expect(onMountFunction).toHaveBeenCalledTimes(1);
    expect(count).toBe(1);
  });

  it("should not call the onMountFunction again when the component re-mounts", () => {
    const onMountFunction = jest.fn();
    const [count, setCount] = useState(0);

    const Wrapper = () => {
      useMountEffect(() => {
        setCount(count + 1);
      });

      return <div>Count: {count}</div>;
    };

    render(<Wrapper />);
    expect(onMountFunction).toHaveBeenCalledTimes(1);
    render(<Wrapper />);
    expect(onMountFunction).toHaveBeenCalledTimes(1);
  });

  it("should not call the onMountFunction if the component is unmounted", () => {
    const onMountFunction = jest.fn();
    const [count, setCount] = useState(0);

    const Wrapper = () => {
      useMountEffect(() => {
        setCount(count + 1);
      });

      return <div>Count: {count}</div>;
    };

    render(<Wrapper />);
    expect(onMountFunction).toHaveBeenCalledTimes(1);
    cleanup();
    expect(onMountFunction).not.toHaveBeenCalled();
  });

  it("should work with async onMountFunction", () => {
    const onMountFunction = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    };
    const [count, setCount] = useState(0);

    const Wrapper = () => {
      useMountEffect(() => {
        setCount(count + 1);
      });

      return <div>Count: {count}</div>;
    };

    render(<Wrapper />);
    expect(count).toBe(0);
    act(() => {
      jest.runAllTimers();
    });
    expect(count).toBe(1);
  });

  it("should work with multiple onMountFunction", () => {
    const onMountFunction1 = jest.fn();
    const onMountFunction2 = jest.fn();
    const [count, setCount] = useState(0);

    const Wrapper = () => {
      useMountEffect(() => {
        setCount(count + 1);
      });
      useMountEffect(() => {
        setCount(count + 2);
      });

      return <div>Count: {count}</div>;
    };

    render(<Wrapper />);
    expect(count).toBe(3);
  });
});
