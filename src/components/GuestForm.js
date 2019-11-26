import React from 'react';
import axios from 'axios';


class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiId: props.apiId,
      name: props.guestName,
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
  }

  onCheckboxChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { apiId, name, flightInfo, mealPref, yoga, detox, massage, breath } = this.state;
    const data = {
      api_id: apiId,
      name: name,
      flight_info: flightInfo,
      meal_pref: mealPref,
      yoga: yoga,
      detox: detox,
      massage: massage,
      breath: breath
    };

    axios.post('http://localhost:3000/api/guests', { data })
      .then(res => {
        // console.log(res);
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
              onChange={this.onCheckboxChange}
            />
            Juice Detox
          </label>
          <label>
            <input
              type='checkbox'
              name='breath'
              id='breath'
              checked={this.state.breath}
              onChange={this.onCheckboxChange}
            />
            Breath-work
          </label>
          <label>
            <input
              type='checkbox'
              name='massage'
              id='massage'
              onChange={this.onCheckboxChange}
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