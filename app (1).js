const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == "")
    {
        swal('Opps..!','input field has no value!','error');
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            swal('Opps..!','Password not matching!','error');
        }
        else
        {
            swal('Good job!','Register successful!','success');
            setTimeout(()=>{location.href='login.html'},1000);
        }
    }
    else
    {
        swal('Opps..!','Input mim six digit password!','error');
    }
    }


}

// login function

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == ""){
        swal('Opps..!','input field has no value!','error');
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
            swal('Good job!','login successful!','success');
            setTimeout(()=>{location.href='ecommerce.html';},1000)
        }else
        {
            swal('Opps..!','Try Again','error');
        }
    };


};