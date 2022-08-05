let x = prompt('Who do you want to look up?'); // grabs name of user 2 view
$.get(`/api/user?name=` + x, function(data) { // grabs their data from the API
  userData = JSON.parse(data);
  console.log('Viewing \'' + x + '\'!'); // logs their name
  console.log('Atoms: ' + userData.atoms.toLocaleString()); // grabs atom count, logs
  let elem = userData.element.toString(); // sends their element to elem
  if (!elem.indexOf('CUSTOM')) { // in the API, their element includes CUSTOM if it is custom
    console.log('Element: CUSTOM'); // logs if custom
  } else { // if not custom
    let elem2 = elem.charAt(0).toUpperCase() + elem.slice(1); // grabs element name    console.log('Element: ' + elem2); // logs element name
  }
  console.log(`Role: ${userData.role}`); // grabs their role
  console.log(`Color: ${userData.color}`); // grabs their color in HEX code
  if (userData.linked === 'none') { // checks if disCRUD is linked
    console.log('Discord not linked'); // logs disCRUD is not linked
  } else { // if disCRUD is found linked
    var linkSplit = userData.linked.split("|"); // grabs the username & 4 numbers
    console.log('Linked with Discord: ' + linkSplit[0]); // logs info
  }
});
