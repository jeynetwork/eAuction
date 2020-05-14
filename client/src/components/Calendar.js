import React, { Component } from 'react';
import moment from 'moment';
import "../public/css/side.css";

class Calendar extends Component {
    state = {
        dateObject:moment()
    }
    weekdayshort = moment.weekdaysShort();

    
    firstDayOfMonth = ()=>{
        let dateObject=this.state.dateObject;
        let firstDay=moment(dateObject).startOf("month").format("d");
        return firstDay;
    }
    currentDay = ()=>{
        return this.state.dateObject.format("D");
    }
   render(){

    let weekdayshortname = this.weekdayshort.map(day => {
        return (
          <th key={day} className="week-day">
           {day}
          </th>
        );
     });
     
       let blank=[];
       for(let i=0;i<this.firstDayOfMonth();i++){
           blank.push(
           <td className="calendar-day empty" >{}</td>
           )
       }
       
       let daysInMonth = [];
       for(let d=1;d<=moment(this.state.dateObject).daysInMonth();d++){
        let currentDay = d == this.currentDay() ? "today" : "";   
        daysInMonth.push(  
            <td key={d} className={`calendar-day ${currentDay}`}>   
                {d} 
            </td>
        )
       }

       let totalSlots = [...blank, ...daysInMonth];
       let rows = [];
       let cells = [];

       totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows 
          cells = []; // empty container 
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
          rows.push(cells);
        }
      });

      let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
      });

    return (
        <div className="calendar">
                        <table cellSpacing="0" className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
    )
   }
}

export default Calendar
