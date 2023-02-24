const API = "http://127.0.0.1:8000/";

const getProfile = () => {
  axios
    .get(API + "auth/get-profile")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const registerDoctor = (e) => {

    console.log("submitted")
    const firstName = document.getElementById("firstName")
    const birthdayDate = document.getElementById("birthdayDate")
    const emailAddress = document.getElementById("emailAddress")
    const phoneNumber = document.getElementById("phoneNumber")
    const password = document.getElementById("password")
    
    console.log(firstName, phoneNumber)
    axios.post(API+"auth/register/doctor", {
        name: firstName.value,
        phoneNumber: phoneNumber.value,
        email: emailAddress.value,
        dob: birthdayDate.value,
        password: password.value,
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

}





    



    


console.log("working");

// getPatients();
