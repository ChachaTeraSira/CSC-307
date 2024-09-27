// src/MyApp.jsx
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
    // ^ Browsers will not accept this kind of code directly, so we need Vite to transpile it to standard Javascript. (Technically, the name of the standard language is ECMAScript.)
  );
}
export default MyApp;