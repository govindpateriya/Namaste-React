import React from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from 'react-dom/client';


const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii im from h1 tag🚀🚀"),
    React.createElement("h2", {}, "hii from h2 tag  "),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hii imebweguhwegyufwy from h1 tag"),
    React.createElement("h2", {}, "hii issssfrom h2 tag"),
  ])]
);



const root = createRoot(document.getElementById("root"));
root.render(parent)