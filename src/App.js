import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1>React Web Page</h1>
      <p>This page is built using React, a popular front-end framework.</p>
      
      <h2>How the Page Was Built</h2>
      <ol style={{ textAlign: "left", display: "inline-block" }}>
        <li>Installed Node.js to get access to npm.</li>
        <li>Used <code>npx create-react-app react-webpage</code> to set up the React app structure.</li>
        <li>Modified the <code>App.js</code> file to include this content.</li>
      </ol>

      <h2>Difficulties Encountered</h2>
      <p><strong>Issue:</strong> Setting up the development environment.<br />
         <strong>Solution:</strong> Followed React's official documentation.</p>
      <p><strong>Issue:</strong> Understanding component-based design.<br />
         <strong>Solution:</strong> Studied React tutorials and examples online.</p>

      <p>Thank you for reviewing this page!</p>
    </div>
  );
}

export default App;
