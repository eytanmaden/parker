const URL = "http://localhost:8000";

const resOk = (res) => (res.ok ? res.json() : res.text());

export const getAvailableParking = async (id) => {
  return await fetch(URL + "/driver/parking/1").then(resOk);
};
