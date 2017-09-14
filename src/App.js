import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
// const request = require('axios') // a promise based HTTP client for the browser and Node.js.
import axios from 'axios';


class CamperTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: [],
      sortRecent: true
    };
  }
  componentDidMount() {
    this.ajaxRequest();
  }

  ajaxRequest = () => {
    const url = this.state.sortRecent ?
                'https://fcctop100.herokuapp.com/api/fccusers/top/recent':
                'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    const self = this;
    axios.get(url)
      .then(function(response) {
        console.log(response);
        self.setState({
          campers: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        alert('Whoops! Try reloading the page.')
      });
  }

  sortUsers = (e) => {
    const bool = e.target.id === "recent" ? true : false;
    this.setState({
      sortRecent: bool
    }, this.ajaxRequest);
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
      <tr className="row">
        <th className=" col-md-1 col-sm-1">{ "#" }</th>
        <th className=" col-md-5 col-sm-5" >{ "Camper" }</th>
        <th className=" pointsHd col-md-3 col-sm-3" id="recent"
          onClick={props.sortUsers}>{ "Past 30 days" }</th>
        <th className=" pointsHd col-md-3 col-sm-3" id="alltime"
          onClick={props.sortUsers}>{ "All time" }</th>
        </tr>
    </thead>
  );
}

const CamperRow = (props) => {
  return (
    <tr className="header row">

      <td className=" col-md-1 col-sm-1">{ props.rank }</td>

      <td className=" col-md-5 col-sm-2">
        <img src={ props.camper.img } alt="logo"></img>
        <p className="user">{ props.camper.username }</p>
      </td>

      <td className=" points col-md-3 col-sm-3" >
        { props.camper.recent }
      </td>

      <td className=" points col-md-3 col-sm-3">
        { props.camper.alltime }
      </td>

    </tr>
  );
}




export default CamperTable;
