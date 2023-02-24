const API = "http://127.0.0.1:8000/";

const getPatients = () => {
  axios
    .get(API + "auth/get-profile")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};