function addData()
{
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    if(fname == "" || lname == "" || email == "" || pass == "" || cpass == "")
    {

       swal("Oops!","All fields must be filled","error");
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
        {
        if( pass !== cpass)
        {
           swal("Oops!","Password doesnt match","error");
        }
        else
        {
            swal("Good Job!","Registration successful !","success");  
        }
    }
    else
    {
        swal('Opps..!','Input mim six digit password!','error');
    }

}
}