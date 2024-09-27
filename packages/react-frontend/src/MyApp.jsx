// src/MyApp.jsx
import React from "react";
import Table from "./Table";

function MyApp() {
  return (
    <div className = "container">
      <Table />
    </div>
    // ^ Browsers will not accept this kind of code directly, so we need Vite to transpile it to standard Javascript. (Technically, the name of the standard language is ECMAScript.)
  );
}
export default MyApp;