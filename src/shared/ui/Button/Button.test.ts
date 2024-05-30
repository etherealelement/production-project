import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("should render", () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});
