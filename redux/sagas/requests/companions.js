import axios from "axios";

// export function requestGetCompanions(token) {
//   return axios.request({
//     method: "get",
//     url: "https://lifetrackerfinal.herokuapp.com/companions/",
//     headers: {
//       "Content-Type": "application.json",
//       Authorization: token,
//     },
//   });
// }
export function requestGetCompanions(token) {
  return axios.get("https://lifetrackerfinal.herokuapp.com/companions/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function requestGetEvents(token) {
  return axios.get("https://lifetrackerfinal.herokuapp.com/companions/event/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
