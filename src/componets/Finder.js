import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";

///////////////REDUX THINGS/////////////////////

import { FindByCountry } from "../Redux/actions/Launchers";
import { GetData } from "../Redux/actions/Launchers";

///////////////////////////////////

const Finder = props => {
  const [countryName, setcountryName] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const SearchCountry = () => {
    props.GetData(countryName);
  };

  return (
    <div className="container-fluid">
      <h1>Finder</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Country Name"
          aria-label="Country Name"
          aria-describedby="button-addon2"
          onChange={e => setcountryName(e.target.value)}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => SearchCountry()}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <h1>{countryName}</h1>
        <h2>Today:</h2>
        <p>{props.country.date}</p>
        <h3>Confirmed:</h3>
        <p>{props.country.confirmed}</p>
        <h3>Deaths:</h3>
        <p>{props.country.death}</p>
        <h3>Revovered:</h3>
        <p>{props.country.recovered}</p>
      </div>
    </div>
  );
};
////////////////////////////////////////////////
const mapStateToProps = (state, ownProps) => {
  console.log(state.SearchCountryByName);

  return {
    country: state.SearchCountryByName
  };
};

///////////////////////////////////////
const mapDispatchToProps = {
  FindByCountry,
  GetData
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
