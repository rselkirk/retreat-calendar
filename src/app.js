import React from "react";
import Calendar from "./components/Calendar";
import Registrations from "./components/Registrations";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
        <Registrations />
      </div>
    );
  }
}

export default App;