import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import AddStudent from "./Components/AddStudent";
import TestRenderer from "react-test-renderer"; //

test("should render todo component", () => {
  render(<AddStudent />);
  const addElement = screen.getByTestId("add-1");
  expect(addElement).toBeInTheDocument();
  expect(addElement).toBeInTheDocument("Add New Student");
});

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://localhost:3000/">School Registration system</Link>
);

console.log(testRenderer.toJSON());

it("checkButtonRender", () => {
  const { queryByTitle } = render(<AddStudent />);
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  const { queryByTitle } = render(<AddStudent />);
  const btn = queryByTitle("dummyButton");
  expect(btn.onmouseenter).toBe("Press Here or click");
  fireEvent.click(btn);
  expect(btn.onmouseleave).toBe("You Clicked");
});
