var userNameError=document.getElementById('user-name-error');
function validateName(){
    var userName= document.getElementById('username').value;
    var usr=document.getElementById('username');
    if(userName.length==0){
        userNameError.innerHTML='Please enter your user name!';
        usr.style.borderColor='red';
        return false;
    }
    if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        userNameError.innerHTML='Please enter your full name!';
        usr.style.borderColor='red';
        return false;
    }
    userNameError.innerHTML= ''
    usr.style.borderColor='green';
    return true;
}
var emailError=document.getElementById('email-error');
function validateEmail(){
    var email=document.getElementById('email').value;
    var em=document.getElementById('email');
    if(email.length===0){
        emailError.innerHTML='please enter your email';
        em.style.borderColor='red';
    }else if(!email.includes('@' && 'gmail.com' )){
        emailError.innerHTML='please enter a valid email';
        em.style.borderColor='red';
    } else{
        emailError.innerHTML='';
        em.style.borderColor='green';
    }
}

// var passwordError=document.getElementById('password-error');
// function validatePassword(){
// var password=document.getElementById('password').value;
// var ps=document.getElementById('password');
// if(password.length==0 || null){
//     passwordError.innerHTML='Please enter yourpassword';
//     ps.style.borderColor='red';
//     return false;
// }
// if(password.length<8){
// passwordError.innerHTML="password must be atleast 8 characters!";
// ps.style.borderColor='red';
// return false;
// }
// else if(password.length==8){
//     passwordError.innerHTML='strong!';
//     ps.style.borderColor='lightgreen';
// } 
// if(!password.match(/[!\@\#\%\^\&\*\(\)\_\-+\=\,\.\?\\]/)){
//     passwordError.innerHTML='password must contain at least one special characters'
//     ps.style.borderColor='lightgreen';
//     return false;
// }
// else if(!password.match(/[0-9]/)){
//     passwordError.innerHTML='password must contain at least one number';
//     ps.style.borderColor='lightgreen';
//     return false;
// }
// else{
//     passwordError.innerHTML="";
//     ps.style.borderColor='green'
//     return true;
// }
// }

// var confirmPasswordError=document.getElementById('confirm-password-error');
// function validateConfirmPassword(){
//     var confirm=document.getElementById('confirm').value;
//     var pass=document.getElementById('confirm');
//     if(confirm.length==0 || null){
//         confirmPasswordError.innerHTML='Please enter password';
//         var pass=document.getElementById('confirm');
//         pass.style.borderColor='red'
//         return false;
//     }
//     var password=document.getElementById('password').value;
//     var pass=document.getElementById('confirm');
//     if(confirm!=password){
//         confirmPasswordError.innerHTML="passwords don't match";
//         pass.style.borderColor='red';
//     } else{
//         confirmPasswordError.innerHTML='';
//         pass.style.borderColor='green';
//     }
//     }
