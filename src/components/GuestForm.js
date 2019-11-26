import React from 'react';
import axios from 'axios';


class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiId: '',
      name: '',
      flightInfo: '',
      mealPref: 'omnivore',
      yoga: false,
      detox: false,
      massage: false,
      breath: false
    };

    this.onChange = this.onChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state);
  }

  onCheckboxChange({target}) {
    this.setState({ [target.name]: !this.state[target.name] });
    console.log(this.state);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const { apiId, name, flightInfo, mealPref, yoga, detox, massage, breath } = this.state;
    const data = {
      api_id: 1,
      name: name,
      flight_info: flightInfo,
      meal_pref: mealPref,
      yoga: yoga,
      detox: detox,
      massage: massage,
      breath: breath
    };
    // const { apiId, name, flightInfo, mealPref, yoga, detox, massage, breath } = this.state;
    // const data = new FormData(event.target);

    axios.post('http://localhost:3000/api/guests', { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Flight Info:
          <input
            type='text'
            name='flightInfo'
            id='flightInfo'
            onChange={this.onChange}
            value={this.state.flightInfo}
          />
        </label>
        <label>
          Meal Preference:
          <select
            name='mealPref'
            id='mealPref'
            value={this.state.value} 
            onChange={this.onChange} 
          >
            <option value='omnivore'>Omnivore</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
          </select>
        </label>
        <label>
          Activity Preferences:
          <label>
            <input 
              type='checkbox' 
              name='yoga'
              id='yoga'
              checked={this.state.yoga}
              onChange={this.onCheckboxChange} 
            />
            Yoga
          </label>
          <label>
            <input
              type='checkbox'
              name='detox'
              id='detox'
              checked={this.state.detox}
              onChange={this.onChange}
            />
            Juice Detox
          </label>
          <label>
            <input
              type='checkbox'
              name='breath'
              id='breath'
              checked={this.state.breath}
              onChange={this.onChange}
            />
            Breath-work
          </label>
          <label>
            <input
              type='checkbox'
              name='massage'
              id='massage'
              onChange={this.onChange}
              value={this.state.massage}
            />
            Massage
          </label>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default GuestForm;