import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {

  // test("Status from props should be in the state", () => {
  //   const component = create(<Status status="it-kamasutra.com" />);
  //   const instance = component.root;
  //   expect(instance.state.status).toBe("it-kamasutra.com");
  // });

  test("After creation <span> should be displayed", () => {
    const component = create(<Status status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("After creation <input> shouldn't be displayed", () => {
    const component = create(<Status status="it-kamasutra.com" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("After creation <span> should contains correct status", () => {
    const component = create(<Status status="it-kamasutra.com" isEditable={true} />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  test("Input should be displayed in EditMode instead of span", () => {
    const component = create(<Status status="it-kamasutra.com" isEditable={true} />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");
  });

  // test("Callback should be called", () => {
  //   const mockCallback = jest.fn();
  //   const component = create(<Status status="it-kamasutra.com" saveStatus={mockCallback} />);
  //   const instance = component.getInstance();
  //   instance.deactivateEditMode();
  //   expect(mockCallback.mock.calls.length).toBe(1);
  // });

});
