var i = 0; // creates var 2 use later
var boxes = [] // creates array 2 user

var name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n')); // grabs & lists crates, asks name of crate 2 open
if (!Object.keys(cratesList).includes(name)) { // checks if crate exists
  alert('That crate doesn\'t exist...');
  name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
}
var amt = Number(prompt("How many crates would you like to open?\ntype \"*\" to unlock all you can with your current atoms.")); // checks amp 2 open
if (isNaN(amt)) amt = Number.MAX_VALUE // makes the * work
var eee = confirm('Show what you get? This will make the opening longer. You can always just see what you get later.') // since this is in alerts this is critical to include, alert clickthrough is a PAIN

function buyBox() { // using function for setInterval
  $.post('/api/open/', `crate=${name}`, function(data) { // calls the API
    try {
      if (data.includes("rate")) i-- // uses i var to check amt left
      else {
        var rarity = elementList[data]['rarity'].toUpperCase() // grabs the rarity
        if (eee) { // if show what get
          switch (rarity) { // extra thing checking for rare items
            case "LEGENDARY": // rare item 2 look for
            case "FABLED": // rare item 2 look for
            case "DIVINE": // rare item 2 look for
            case "PERFECT": // rare item 2 look for
              alert(`${data} || ` + rarity + '\nYou got a rare item! Trade it for a lot!'); // sends info & tells to sell for lots
              break;
            default:
              alert(`${data} || ` + rarity); // tells info for normal elements
              break;
          }
        }
      }
    } catch (e) {
      i = amt // if error, don't count it towards crates opened
    }
  });
}
var check = setInterval(() => { // setsInterval
  if (i < amt) { // if i (amount left) is still less than amt (amount to open)
    buyBox(); // buy
    i++; // add one to make the above if true
  } else { // if it's done opening
    clearInterval(check); // ends the setInterval
    alert('Done opening crates!') // tells done
  }
}, 500); // sets speed for opening