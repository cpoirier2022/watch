import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ signOut }) { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signOut}>Logout</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);