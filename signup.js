let getUserdata = JSON.parse(localStorage.getItem("userdata")) || [];
console.log(getUserdata);

function signup(){
    let username = document.getElementById("naam").value;
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;

    if(mobile.length==0){
        alert("Please enter mobile number")
    }

    else if(mobile.length!=10){
        alert("Invalid Mobile Number");
    }
    else{
        let userData = {
            username:username,
            mobile:mobile,
            password:password
        }

        let users=[...getUserdata,userData];

        localStorage.setItem("userdata", JSON.stringify(users));

        alert("SignUp succeccfull")
        window.location.href="signin.html"
    }
    

}


