import React from "react";
import ReactDOM from "react-dom";
import tw from "twin.macro";
import "tailwindcss/dist/base.css";

const Button = tw.button`text-lg px-8 py-2 rounded`;

const rootElement = document.getElementById("root");
ReactDOM.render(<Button>hoeeeeeee</Button>, rootElement);
