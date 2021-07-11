# React + Node.js (npm install) setups'  

## Tutorial
<b> Sources </b>
https://www.youtube.com/watch?v=hQAHSlTtcmY&t=393s  
https://youtu.be/dGcsHMXbSOA?t=519  
https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d  

## Getting Started by ME :)
<b> Installing React in new repo </b>  
- Install <a href="https://nodejs.org/en/"> node.js </a> first acutally
- Run `node -v` to check version and if it's downloaded
- Run `npx create-react-app .` to install React Application in current folder or "."
- Alternatively, install `npm install --global yarn` and then `yarn create react-app .`
- Delete all in src besides "App.js" and "index.js" to have fresh start

App.js

```javascript
import React from 'react'; 

function App() {
  return (
    null
  );
}

export default App;
```
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- If cloning, then just `npm install` or `yarn` or `yarn install` after `git clone "link"` to install node_modules
- Note if you get "running scripts is disabled...", then open command prompt in admin and run `powershell Set-ExecutionPolicy RemoteSigned`

<b> Running on local machine </b>  
- `git pull` from main to get latest version
- Run `npm start` or `yarn start` to have liver server on http://localhost:3000/

<b> Running on local machine </b>  
- Source: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
- Run `yarn run deploy` or `npm run deploy` to update and push to gh-pages branch
