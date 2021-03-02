// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <small>
            You are running this application in {process.env.NODE_ENV} mode.
          </small>
        </p>
        <p>
          <small>Environment: {process.env.REACT_APP_ENVIRONMENT_NAME}</small>
        </p>
        <p>
          <small>
            Shared Environment Variable: {process.env.REACT_APP_SHARED_VAR}
          </small>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
