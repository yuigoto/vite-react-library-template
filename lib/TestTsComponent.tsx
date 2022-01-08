import { HTMLAttributes } from "react";

/**
 * Test component props.
 */
interface ITestTsComponent extends HTMLAttributes<any> {
  /**
   * Component name.
   */
  name: string;
}

/**
 * Test component.
 */
const TestTsComponent = ({
  name,
  children,
  ...props
}: ITestTsComponent): JSX.Element => {
  return (
    <div {...props}>
      <h4>{name}</h4>
      {children}
    </div>
  );
};

export default TestTsComponent;
