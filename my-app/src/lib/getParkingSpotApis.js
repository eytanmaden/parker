const URL = "http://localhost:8080";

const resOk = (res) => (res.ok ? res.json() : res.text());

export const getAvailableParking = async (id) => {
  return await fetch(URL + "/driver/parking/1").then(resOk);
};
