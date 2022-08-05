$.get('/api/user/', function(data) { // fetches the API for the user's info
    window.user = data.name;
})
function changeUsername() {
    var newUsername = prompt("Enter your new username."); // needed
    var pass = btoa(prompt("Enter your current password")); // we need verification for the system to change the user

    $.post('/api/changeusername/' /* the api change user in settings */, `username=${newUsername}&password=${pass}` /* sends the info above */, function(data) {
        navigator.clipboard.writeText(newUsername); // copies new user to clipboard
        alert("copied username to clipboard")
    });
}
changeUsername() // calls the entire changeUsername() above
