import logo from './logo.svg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React from "react";



import './App.css';
import NewComponent from './components/newComponent';
// import SearchBar from './components/searchBar';
import Button from '@mui/material/Button';
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};


toast.configure()
function App() {
  const  notify = () => {
    toast('NASA HACKED',{position: toast.POSITION.TOP_LEFT})
    toast.success('NASA HACKED',{position: toast.POSITION.TOP_CENTER})
    toast.info('NASA HACKED',{position: toast.POSITION.TOP_RIGHT})
    toast.warn('NASA HACKED',{position: toast.POSITION.BOTTOM_LEFT})
    toast.erro('NASA HACKED',{position: toast.POSITION.BOTTOM_RIGHT})
    toast('NASA HACKED',{position: toast.POSITION.BOTTOM_CENTER})
  }
  const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
  };
  
  const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
  const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;
  
  const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  };
  
  
  return (
    <div className="App">
      <NewComponent></NewComponent>
      <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
      {/* <SearchBar></SearchBar> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    <Button 
    onClick={notify}
    type="submit" color="secondary" variant="contained">Click Here</Button>


    </div>
  );
}

export default App;
