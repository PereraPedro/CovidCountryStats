import axios from "axios";

export const GetData = country => {
  return dispatch => {
    return axios
      .get(`https://pomber.github.io/covid19/timeseries.json`)
      .then(response => {
        console.log(response);
        console.log(country);
        let day = response.data[country].length - 1;
        dispatch(FindByCountry(response.data[country][day]));
      });
  };
};

export const FindByCountry = cn => {
  return {
    type: "FIND_COUNTRY",
    datos: cn
  };
};

//new Promise((resolve, reject) => {
//   setTimeout(() => {
//     GetData().then(res => {
//       let all = [];
//       let number = res.data["Spain"].length - 1;

//       //let data = res["Spain"][number];

//       all.push(
//         res.data["Spain"][number].date,
//         res.data["Spain"][number].confirmed,
//         res.data["Spain"][number].deaths,
//         res.data["Spain"][number].recovered
//       );

//       resolve(all);
//     });
//   }, 1000);
// })
