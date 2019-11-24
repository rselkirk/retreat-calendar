import React from 'react';
import Calendar from './components/Calendar';
import './styles/App.css';

class App extends React.Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/api/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    console.log(body);
    return body;
  };

  render() {
    return (
      <div className='App'>
        <header>
          <div id='logo'>
            <span>
              retreat<b>calendar</b>
            </span>
            <p>{this.state.data}</p>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;