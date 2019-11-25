import React from 'react';

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Flight Info:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Meal Preference:
          <select>
            <option value='omnivore'>Omnivore</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
          </select>
        </label>
        <label>
          Activity Preferences:
          <label>
            <input type="checkbox" />
            Yoga
          </label>
          <label>
            <input type="checkbox" />
            Juice Detox
          </label>
          <label>
            <input type="checkbox" />
            Breath-work
          </label>
          <label>
            <input type="checkbox" />
            Massage
          </label>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GuestForm;