import React from 'react';
import { eachDayOfInterval, parse } from 'date-fns';

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
      // .then(data => this.setState({ data }));
      .then(data => {
        let dates = [1];
        console.log(data[1]);
        let occupiedDates = data.map((reg) => {
          dates = dates.concat(eachDayOfInterval({ start: parse(reg.start_date, 'yyyy-MM-dd', new Date()), end: parse(reg.end_date, 'yyyy-MM-dd', new Date())}));
          // dates.push(eachDay(parse(reg.start_date), parse(reg.end_date)));
        })
        console.log(dates);
      })
  }

  // occupiedDates = (data) => {
  //   console.log(typeof data);
  //   // data.forEach((reg) => {
  //   //   console.log(reg.start_date);
  //   // })
  //   return data;
  // }
  
  render() {
    return (
      <div>
        <p>Q</p>
      </div>
    )
  }
};

export default Registrations;

// { JSON.stringify(this.occupiedDates(this.state.data)) }