var wordCount = confirm('Is the element one word?\nOk = yes, Cancel = no'); // checks word count
if (wordCount) { // if one word
    try {
        let element = prompt('What element are you trying to get?').toLowerCase(); // gets element and sends it to lower case, sends it to element
        let amt = prompt('How many crates are you opening?') // asks crate number, sends it to amt
        let amount = prompt('How many are you aiming for?') // asks number aiming for, sends it to amount
        let chance = elementList[element]['chance'] // grabs the element chance
        alert('Press OK to calculate')

        let calculation = chance * amt // does the math, elem chance times amount of crates
        alert('You have a ' + calculation + '% chance to get at least one ' + element + '. (Press OK to continue)') // percent to get at least one
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
        // percent to get the amount you want. does calc/amount to divide how likely it is to get two, say, divide the calc by two and BOOM, chance to get two!
    } catch (e) {
        alert('An error has occurred, you may not have entered the element name properly.'); // gives a not very helpful error
    }
} else {
    let twoword = prompt('Enter the element name:').toLowerCase(); // gets the element name
    const splitter = twoword.split(" "); // gets the different words into an array
    let twowordfin1st = splitter[0]; // gets the first word
    let twowordfin2nd = splitter[1]; // gets the 2nd word
    const splitfin = twowordfin2nd.charAt(0).toUpperCase() + twowordfin2nd.slice(1); // makes the 2nd element word uppercase to fit Betastar code standards
    
    try {
        let element = twowordfin1st + splitfin; // defines element with the stuff we did above.
        let amt = prompt('How many crates are you opening?') // from this point on it copies the one word thing, just look there
        let amount = prompt('How many are you aiming for?')
        let chance = elementList[element]['chance']
        alert('Press OK to calculate')

        let calculation = chance * amt
        alert('You have a ' + calculation + '% chance to get at least one ' + twoword + '. (Press OK to continue)')
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + twoword + '.')
    } catch (e) {
        alert('An error has occurred, you may not have entered the element name properly.')
    }
}
