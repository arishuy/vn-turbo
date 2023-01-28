import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Loader from './components/Loader';
import React from 'react';
function App() {
  const [isDisplay, setDisplay] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {isDisplay === true ? <Loader /> : 
      <div>
      <Header />
      <Body />
      </div>
  }
    </div>
  );
}

export default App;
