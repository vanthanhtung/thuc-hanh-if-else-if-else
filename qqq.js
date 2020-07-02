function login() {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username=='admin'){
        if (password=="themaster"){document.getElementById('hienthi').innerHTML="Welcome!";}
        else if(password=="null"){document.getElementById('hienthi').innerHTML="Canceled";}
        else {document.getElementById('hienthi').innerHTML="Wrong password";}

    }
    else if(username=="null"){document.getElementById('hienthi').innerHTML="Canceld";}
    else {document.getElementById('hienthi').innerHTML="I don't know you";}

}