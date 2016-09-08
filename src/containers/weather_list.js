import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';
import lodash from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = (cityData.list.map((data)=>{return (data.main.temp - 273)}));
    const pressures = cityData.list.map((data)=>data.main.pressure);
    const humiditys = cityData.list.map((data)=>data.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="green" units="C" /></td>
        <td><Chart data={pressures} color="orange" units="hPa" /></td>
        <td><Chart data={humiditys} color="red" units="%" /></td>
      </tr>
    );
  }


  render () {

    console.log("weather props : ", this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Korean Cities</th>
            <th>Temperature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Hummidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps(state) {
  return { weather : state.weather };
}


export default connect(mapStateToProps)(WeatherList);
