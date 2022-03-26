import logo from './logo.svg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import NewComponent from './components/newComponent';
// import SearchBar from './components/searchBar';
import Button from '@mui/material/Button';

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
  return (
    <div className="App">
      <NewComponent></NewComponent>
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
    type="submit" color="secondary" variant="contained">ClickMe</Button>


    </div>
  );
}

export default App;
