import "./App.css";
import React, { useEffect } from "react";
import { getSmurfs, deleteSmurf } from "../actions";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";

function App(props) {
  console.log('Props from App', props);
  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <div className="flex">
        <h2>Smurf Village</h2>
        {props.smurfs.map(smurf => (
          <Smurf smurf={smurf} deleteSmurf={props.deleteSmurf} />
        ))}
      </div>
    </div>
  );
}

const Smurf = props => {
  console.log("this is a smurf", props);
  return (
    <div className="smurf">
      <p>{props.smurf.name}</p>
      <p>{props.smurf.height}</p>
      <p> {props.smurf.age} years old</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(App);