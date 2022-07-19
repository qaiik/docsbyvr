if (!localStorage.blockedUsers) { // sends the blocked user list to JSON so we can easy access it
  localStorage.blockedUsers = JSON.stringify([])
}

function blockuser(name) {
  let json = JSON.parse(localStorage.blockedUsers) // gets the list
  localStorage.blockedUsers = JSON.stringify(json.concat(name)) // adds it
}

function unblockuser(name) {
  let json = JSON.parse(localStorage.blockedUsers) // gets the list
  localStorage.blockedUsers = JSON.stringify(json.filter(value=>{  // removes it
    return value !== name
  }))
}

function getBlockedUsers() {
  return JSON.parse(localStorage.blockedUsers) // gets the list and returns it
}

socket.on("rmes", (m)=>{ // turns on rmes, a socket command in Betastar
  Array.from(document.querySelector(".chatBox").children).forEach(msg=>{ // for each message
    let user = msg.children[1].innerText.split( // gets the user part of the message, since it is all text and no variables in the code
        "] "
    )[1].split(" >")[0]
    if (getBlockedUsers().includes(user)) { // gets the list of blocked users and checks if it includes this one
      msg.remove() // removes their message if the user is found
    }
  })
})

document.addEventListener("keydown", function(event) { // lines 32, 33 check if ESC is pressed
    if (event.keyCode === 27) {
      var commandsForBlock = prompt('Enter a command:\nBlock - blocks a user\nList - views list of blocked users\nUnblock - unblock a user\n\nScript credit to qaiik, interactive system credit to VillainsRule.').toLowerCase();
      // lists commands and asks for one, assigns commandsForBlock to their response
      switch (commandsForBlock) { // checks the variable commandsForBlock
        case "block": // if they said block
          var usertoblock = prompt('Enter name of user to block - case sensitive!'); // asks who to block
          blockuser(usertoblock); // blocks them
          break;
        case "list": // if they said list
          alert(getBlockedUsers()); // gets the function getBlockedUsers() and returns it
          break;
        case "unblock": // if they said unblock
          var unbuser = prompt('Who do you want to unblock?'); // asks who to unblock
          unblockuser(unbuser); // unblocks them
          break;
      }
    }
});
