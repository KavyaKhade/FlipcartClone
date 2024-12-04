let getUsersdata = JSON.parse(localStorage.getItem("userdata")) || [];

function Signin(){

    let mobile=document.getElementById("mobile").value;

    let password = document.getElementById("pass").value;
     
    let count=0;
     if(mobile.length==0){
        alert("Please Enter Mobile Number");
    }
    else if(mobile.length!=10){
        alert("Invalid Mobile Number , mobile number should be of legnth 10");
    }else{
        for(let i=0;i<getUsersdata.length;i++){
    
            if(mobile==getUsersdata[i].mobile){
    
                if(password==getUsersdata[i].password){
    
                    alert("Signin Successfull")
                    window.location.href="index.html"
                }
                else{
                    alert("inncorect password")
                }
            }else{
                count++;
            }
        }
    }
    

    

    if(count==getUsersdata.length){
        alert("user is not registered, please signup to continue")
        window.location.href="signup.html"
    }

    
    
}
