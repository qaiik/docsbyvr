// legit this took ages. the site is a whole jungle gym of element names, tbh, still trying to work with it & minify this, to no avail.
// won't be making as many notes as much of this is straightforward.

var wordCount = confirm('Is the element one word?\nOk = yes, Cancel = no\n\nNow works on the Spungle crate!'); // required due to syntax. could have checked for " " but didn't as this is much easier

if (wordCount) {
    try { 
        let element = prompt('What element are you trying to get?').toLowerCase();
        let amt = prompt('How many crates are you opening?');
        let amount = prompt('How many are you aiming for?');
        let chance = elementList[element]['chance'];
        alert('Press OK to calculate');
        let calculation = chance * amt;
        alert('You have a ' + calculation + '% chance to get at least one ' + element + '. (Press OK to continue)')
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
    } catch (e) {
        alert('An error (' + e + ') has occurred, you may not have entered the element name properly.')
    }
} else {
    var spungle = confirm('Is the element from the Spungle crate?\nOk = yes, Cancel = no');
        
    let twoword = prompt('Enter the element name:').toLowerCase();
    const splitter = twoword.split(" "); // splits first and second word, saves both
    let twowordfin1st = splitter[0];
    let twowordfin2nd = splitter[1];
    let splitfin = '' // must define outside else block for later checks
    if (spungle) {} else { splitfin = twowordfin2nd.charAt(0).toUpperCase() + twowordfin2nd.slice(1); } // fixes syntax for Blue K & Yellow X
    
    try {
        let element = '';
        if (spungle) { element = twowordfin1st + twowordfin2nd; } else {  element = twowordfin1st + splitfin; } // changes info for both of them due to syntax
        let amt = prompt('How many crates are you opening?');
        let amount = prompt('How many are you aiming for?');
        let chance = elementList[element]['chance']; // grabs chance
        alert('Press OK to calculate');
        let calculation = chance * amt;
        
        alert('You have a ' + calculation + '% chance to get at least one ' + twoword + '. (Press OK to continue)')
        alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + twoword + '.')
    } catch (e) {
        alert('An error (' + e + ') has occurred, you may not have entered the element name properly.');
    }
}
