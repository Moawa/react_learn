import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Contents/Content';

// import Home from './Components/Contents/Home';
// import Docs from './Components/Contents/Docs';
// import Blog from './Components/Contents/Blog';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
