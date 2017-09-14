import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
const request = require('axios') // a promise based HTTP client for the browser and Node.js.






// array of camper objects
const data = [
{
username: "SkyC0der",
img: "https://avatars1.githubusercontent.com/u/24684319?v=4",
alltime: 2323,
recent: 153,
lastUpdate: "2017-09-12T05:34:27.998Z"
},
{
username: "sjames1958gm",
img: "https://avatars1.githubusercontent.com/u/4639625?v=4",
alltime: 8123,
recent: 152,
lastUpdate: "2017-09-12T05:34:41.025Z"
},
{
username: "Manish-Giri",
img: "https://avatars1.githubusercontent.com/u/11348778?v=3",
alltime: 6160,
recent: 130,
lastUpdate: "2017-09-04T01:57:39.345Z"
},
{
username: "heroiczero",
img: "https://avatars.githubusercontent.com/u/21147717?v=3",
alltime: 1374,
recent: 122,
lastUpdate: "2017-08-28T11:57:28.960Z"
}
];







class CamperTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: data
    };
  }



  componentDidMount() {

  }

  sortUsers = (event) => {
    alert('hi');
  }

  render() {
    let rows = [];
    this.state.campers.forEach(function(camper, i) {
      rows.push(<CamperRow key={i} rank={i + 1} camper={camper} />);
    });
    return (
      <div className="leaderboard">
        <h1>leaderboard</h1>
        <table>
          <Header sortUsers={this.sortUsers}/>
          <tbody>{ rows }</tbody>
          </table>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <thead>
      <tr className="header row">
        <th className="tab col-md-1 col-sm-1">{ "#" }</th>
        <th className="tab col-md-5 col-sm-5" >{ "Camper" }</th>
        <th className="tab pointsHd col-md-3 col-sm-3"
          onClick={props.sortUsers}>{ "Past 30 days" }</th>
        <th className="tab pointsHd col-md-3 col-sm-3"
          onClick={props.sortUsers}>{ "All time" }</th>
        </tr>
    </thead>
  );
}

const CamperRow = (props) => {
  return (
    <tr className="header row">

      <td className="tab col-md-1 col-sm-1">{ props.rank }</td>

      <td className="tab col-md-5 col-sm-2">
        <img src={ props.camper.img } alt="logo"></img>
        <p className="user">{ props.camper.username }</p>
      </td>

      <td className="tab points col-md-3 col-sm-3" >
        { props.camper.recent }
      </td>

      <td className="tab points col-md-3 col-sm-3">
        { props.camper.alltime }
      </td>

    </tr>
  );
}




export default CamperTable;
