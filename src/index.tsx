import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

render(
  <BrowserRouter>
  <App></App>
</BrowserRouter>
  , document.getElementById("root"))
