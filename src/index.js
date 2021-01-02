import React from "react";
import { render } from "react-dom";
import { App } from "./component/app/app.component";
import "./style.css"

const here = document.querySelector("#react-will-render-here");
const app = <App/>

render(app, here);
