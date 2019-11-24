import React from 'react';
import Calendar from './components/Calendar';
import GuestForm from './components/GuestForm';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <header>
      <div id='logo'>
      <span>
      retreat<b>calendar</b>
      </span>
      </div>
      </header>
      <main>
          <GuestForm />
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;