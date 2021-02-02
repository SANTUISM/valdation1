function validate() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var conpass = document.getElementById('conpass').value;
    var mobile = document.getElementById('mob').value;
    var email = document.getElementById('email').value;
    

        if (name == "") {
            document.getElementById('uname').innerHTML = "** Please Write Your Name";
            return false;
        }
        if ((name.length <= 2) || (name.length > 20)){
            document.getElementById('uname').innerHTML = "** Name length must be between 2 and 20";
            return false;
        }
        if (!isNaN(name)) {
            document.getElementById('uname').innerHTML = "** Only characters are allowed";
            return false;
        }



        if (password == "") {
            document.getElementById('pass').innerHTML = "*Please give your Password";
            return false;
        }
        if ((password.length <= 5) || (password.length > 20)){
            document.getElementById('pass').innerHTML = "** Password length must be between 6 and 20";
            return false;
        }
        if (password!=conpass) {
            document.getElementById('confpass').innerHTML = "** Password are not matching";
            return false;
        }

        if (conpass == "") {
            document.getElementById('confpass').innerHTML = "** Please Write Your Name";
            return false;
        }




        if (mobile == "") {
            document.getElementById('mobile').innerHTML = "** Please Give Your MObile No";
            return false;
        }
        if (isNaN(mobile)) {
            document.getElementById('mobile').innerHTML = "** User must only digits not character";
            return false;
        }
        if (mobile.length!=10) {
            document.getElementById('mobile').innerHTML = "** User's Mobile No must be 10 digits only";
            return false;
        }

        if (email == "") {
            document.getElementById('email1').innerHTML = "** Please give your emailId";
            return false;
        }
        if (email.indexOf('@') <= 0){
            document.getElementById('email1').innerHTML = "** invalid @ position";
            return false; 
        }
        if (confirm("If you want to submit press ok")) {
            document.write("You pressed OK!");
        }else{
            document.write("you pressed cancel");
        }  
        
        

}
