import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";
// https://www.apollographql.com/docs/react/essentials/queries.html
const GET_FLIGHTS = gql`
  {
    allFlights {
      airline
      acftType
      flightNum
      departureCity
      departureState
    }
  }
`;
//
const Flights = () => (
  <Query query={GET_FLIGHTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <ul>
          {data.allFlights.map(flight => (
            <li key={flight._id}>
              <b> {flight.airline} </b> <br />
              <b> {flight.flightNum} </b> <br />
              <b> {flight.destinationCity} </b> <br />
              <b> {flight.departureState} </b> <br />
            </li>
          ))};
        </ul>
      );
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Flights> </Flights>
        </p>
      </div>
    );
  }
}

export default App;
