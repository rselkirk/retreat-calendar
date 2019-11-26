import React from 'react';
import * as dateFns from 'date-fns';
import classNames from 'classnames';
import Modal from './Modal';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(2025, 7),
    selectedDate: new Date(2025, 7, 1),
    registrationDays: {dates: []},
    guestNames: '',
    showModal: false
  };

  availableDays = () => {
    let total = dateFns.getDaysInMonth(this.state.currentMonth)
    this.state.registrationDays.dates.forEach((date) => {
      if (dateFns.isSameMonth(date, this.state.currentMonth)) {
        total -= 1;
      }
    });
    return total;
  }

  isOccupied = (regDate) => {
    let occ = false;
    const dates = this.state.registrationDays.dates;
    dates.forEach(function (date) {
      if (dateFns.isSameDay(date, regDate)) {
        occ = true;
      }
    });
    return occ;
  }

  hideModal = value => {
    this.setState({ showModal: false });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day,
      showModal: true
    });
  };

  componentDidMount() {
    fetch('https://demo14.secure.retreat.guru/api/v1/registrations?token=ef061e1a717568ee5ca5c76a94cf5842')
      .then(response => response.json())
      .then(data => {
        let occupiedDates = [];
        let datesWithNames = {};
        data.map((reg) => {
          if (reg.status === 'reserved' && reg.room_id === 6) {
            const shortList = dateFns.eachDayOfInterval({ start: dateFns.parse(reg.start_date, 'yyyy-MM-dd', new Date()), end: dateFns.parse(reg.end_date, 'yyyy-MM-dd', new Date()) })
            shortList.forEach(function(date) {
              datesWithNames[date] = reg.full_name; 
            });
            this.state.guestNames = datesWithNames;
            occupiedDates = occupiedDates.concat(shortList);
          }
        })
        this.setState({registrationDays: {dates: occupiedDates}});
      })
  }

  renderHeader() { 
    const dateFormat = 'MMMM yyyy';
    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='icon' onClick={this.prevMonth}>
            chevron_left
        </div>
        </div>
        <div className='col col-center'>
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className='col col-end' onClick={this.nextMonth}>
          <div className='icon'>chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() { 
    const dateFormat = 'iiii';
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='col col-center' key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className='days row'>{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = 'd';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`${
              classNames({
                'col': true,
                'cell': true,
                'disabled': !dateFns.isSameMonth(day, monthStart),
                'occupied': dateFns.isSameMonth(day, monthStart) ? this.isOccupied(day) : '',
                'hiddeninfo-on-hover': true
              })
            }`}
            key={day}
            onClick={() => this.onDateClick(day)}
          >
            <span className='number'>{formattedDate}</span>
            <span className='bg'>{formattedDate}</span>
            <p className="hiddeninfo">{this.state.guestNames[day]}</p>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className='row' key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className='body'>{rows}</div>;
  }

  render() {
    return (
      <div className='calendar'>
        {this.renderHeader()}
        <Modal
          show={this.state.showModal}
          onHide={() => this.hideModal()}
        />
        {this.renderDays()}
        {this.renderCells()}
        <p>Available Days:{this.availableDays()} </p>
      </div>
    );
  }
}

export default Calendar;