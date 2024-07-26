function validateForm(){
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(email)){
        document.getElementById('message').innerHTML=('valid email!');
    }
    else{
        document.getElementById('message').innerHTML=('incorrect email!');
    }
}