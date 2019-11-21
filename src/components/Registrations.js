import React from 'react';

class Registrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://demo14.secure.retreat.guru/api/v1/registrations?token=ef061e1a717568ee5ca5c76a94cf5842')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
};

export default Registrations;