
var users = [];

if(localStorage.a_users){
    users = JSON.parse(localStorage.a_users);
    displayUsers(users);
}

function displayUsers(users){
    var myTable= "<table><tr><td style='width: 100px; color: red;'>User Name</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Password</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Email</td></tr>";

    myTable+="<tr><td style='width: 100px;'>---------------</td>";
    myTable+="<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable+="<td style='width: 100px; text-align: right;'>---------------</td></tr>";

    for (var i=0; i<users.length; i++) {
        var userName = users[i];
        myTable+="<tr><td style='width: 100px;'>userName</td>";
        //myArray[i] = myArray[i].toFixed(3);
        // myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td>";
        // myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td></tr>";
    }
    myTable+="</table>";

    document.write( myTable);
}

document.getElementById('btn').addEventListener('click', function(){
    checkValidation();
});

function checkValidation(){
    var text;
    var uname = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('loc').value;
    var organization = document.getElementById('org').value;
    var male = document.getElementById('male').checked;
    var female =  document.getElementById('female').checked;
    console.log(male + ' ' + female);

    if(uname.length === 0){
        text = "Please Enter UserName";
        document.getElementById('errorUname').innerHTML = text;
    } else if(password.length === 0) {
        text = "Please Enter Password";
        document.getElementById('errorPwd').innerHTML = text;
    } else if(email.length === 0) {
        text = "Please Enter Email";
        document.getElementById('errorEmail').innerHTML = text;
    } else if(location.length === 0) {
        text = "Please Enter Location";
        document.getElementById('errorLoc').innerHTML = text;
    } else if(organization.length === 0) {
        text = "Please Enter Organization";
        document.getElementById('errorOrg').innerHTML = text;
    } else if(male === false && female === false){
        text = "Please select One of Above";
        document.getElementById('errorRadio').innerText = text;
    } else {
        var user = {
            'username': document.getElementById('uname').value,
            'password': document.getElementById('pwd').value,
            'email': document.getElementById('email').value,
            'location': document.getElementById('loc').value,
            'organization': document.getElementById('org').value,
            'male': document.getElementById('male').value,
            'female': document.getElementById('female').value,
        };

        users.push(user);
        localStorage.a_users = JSON.stringify(users);
    }
}