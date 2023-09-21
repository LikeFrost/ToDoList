import React from "react";

export function Step1() {
  return (
    <pre>
      {`
      ├─public
      │      favicon.ico
      │      index.html
      │      logo192.png
      │      logo512.png
      │      manifest.json
      │      robots.txt
      │      
      |─src
      |       App.css
      |       App.js
      |       App.test.js
      |       index.css
      |       index.js
      |       logo.svg
      |       reportWebVitals.js
      |       setupTests.js
      │——.gitignore
      │——package-lock.json
      │——package.json
      │——README.md
       `}
    </pre>
  );
}

export const stepCode1 = `npm install -g create-react-app
create-react-app todo-list
cd todo-list
npm install
npm start
`;
