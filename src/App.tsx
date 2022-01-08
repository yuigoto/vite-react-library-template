import { TestJsComponent, TestStyledComponent, TestTsComponent } from "../lib";

const App = () => {
  return (
    <div>
      <h1>Hello, Vite!</h1>

      <p>All items below are test library components.</p>

      <TestJsComponent>This is a JS-based component.</TestJsComponent>

      <hr />

      <TestTsComponent name={"TypeScript Component"}>
        <p>And this component was built using TypeScript.</p>
      </TestTsComponent>

      <hr />

      <TestStyledComponent>
        While this one's a Styled Component.
      </TestStyledComponent>
    </div>
  );
};

export default App;
