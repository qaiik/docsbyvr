var i = 0; // creates a variable i to use later
colors = { // we'll use these later
    divine: '#ee82ee',
    mythical: '#a335ee',
    perfect: '#fffacd',
    fabled: '#0c7500',
    legendary: '#ff910f',
    epic: '#be0000',
    rare: '#0a14fa',
    uncommon: '#4bc22e',
    common: '#ffffff'
}

var name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
// lists the crates and asks for the crates, assigns name to it
if (!Object.keys(cratesList).includes(name)) { // if crate doesn't exist, ask again
    alert('That crate doesn\'t exist...')
    name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
}


var amt = Number(prompt("How many crates would you like to open?\ntype \"*\" to unlock all you can with your current atoms."));
// asks for the number opened and assigns amt to it
if (isNaN(amt)) amt = Number.MAX_VALUE // this allows the * to unlock all

function buyBox() { // calls buyCrate(), the function that is called when you open a crate.
    $.post('/api/open/', `crate=${name}`, function(data) { // calls the API for opening a crate, and adds the var name defined earlier to the end. grabs the data returned
        try { // try and catch are made to keep the program smooth and check that the crate was opened properly
            if (data.includes("rate")) i-- // this removes one from the number of crates to open
            else {
                rarity = elementList[data]['rarity'].toLowerCase() // grabs the rarity of the element
                console.log('%c%s', `color: ${colors[rarity]}; font-size: 25px; text-shadow: 0px 0px 15px ${colors[rarity]};`, `${data}`);
                // this tells you what you get in the console, and this is when we use the colors array. we grab the color with the rarity to make it look smooth.
            }
        } catch (e) {
            // this part is made in case something in try fails, and tells the computer to do it againa nd NOT take off from the i variable.
            // remember, the i is the amount of crates LEFT
            i = amt
        }
    });
}
var check = setInterval(() => { // starts the loop of buyBox() so it happens more than once
    if (i < amt) { // checks if there are more boxes to open.
        buyBox(); // calls the buyBox() function above
        i++; // adds to i to say it works
    } else { // this is called if it has finished opening, since i = amt.
        clearInterval(check);
        alert("Done buying crates! Check the console or the Elements page."); // tells the user that they're done
    }
}, 500); // sets the time to open the crate. must coordinate with how fast the API can run the script.
