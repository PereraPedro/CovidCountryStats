import FindByCountry from "../actions/Launchers";
import GetData from "../actions/Launchers";

const SearchCountryByName = (
  state = { fecha: "", confirmed: "", recovered: "", death: "" },
  action
) => {
  switch (action.type) {
    case "FIND_COUNTRY":
      state.fecha = action.datos.date;
      state.confirmed = action.datos.confirmed;
      state.recovered = action.datos.recovered;
      state.death = action.datos.deaths;
      let dara = action.datos;

      return {
        date: state.fecha,
        confirmed: state.confirmed,
        recovered: state.recovered,
        death: state.death,
        dara
      };
      break;
    case "FIND_COUNTRY_FULFILLED":
      return {
        date: (state.fecha = action.datos.data)
      };
      break;
    default:
      return state;
  }
};

export default SearchCountryByName;
