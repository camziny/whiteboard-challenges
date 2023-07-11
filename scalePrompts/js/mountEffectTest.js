import React from "react";
import { useMountEffect } from "./useMountEffect";
import { act } from "@testing-library/react";

describe("useMountEffect", () => {
  it("should call the onMountFunction when the component mounts", () => {
    const onMountFunction = jest.fn();

    const Component = () => {
      useMountEffect(onMountFunction);
    };

    act(() => {
      ReactDOM.render(<Component />, document.getElementById("root"));
    });

    expect(onMountFunction).toBeCalled();
  });
});
