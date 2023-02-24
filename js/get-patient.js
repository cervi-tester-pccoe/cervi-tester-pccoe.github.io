const API = "http://127.0.0.1:8000/";

const getUserProfile = () => {
  axios
    .get(API + "auth/get-profile")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProfile = () => {

    console.log("submitted")
    const emailAddress = document.getElementById("dlogin-email")
    const password = document.getElementById("dlogin-password")
    
    console.log(emailAddress, phoneNumber)
    axios.post(API+"auth/get-profile", {
        name: emailAddress.value,
        password: password.value,
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}