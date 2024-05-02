import ResizePanel from "react-resize-panel";
// import style from './styles.css';
import "./App.css";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Component3 from "./Component/Component3";

export function App() {
  return (
    <div className="container">
      <div className="body">
        <Component1 />
        <Component2 />
      </div>
      <Component3 />
    </div>
  );
}

export default App;
