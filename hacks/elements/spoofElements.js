Array.from(document.getElementById('#elementList').children).forEach(a => a.remove()) // removes every element from the list to avoid duplicates
Object.entries(elementList).forEach((entry) => { // calls the list of elements, and tells the computer for each element, do this
	const [key, value] = entry; // this is the syntax elements are stored in
	$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
  // grabs each element and adds it to the list.
})
for (i=0;i<Object.keys(elementList).length;i++) { // the loop that does lines 8 and 9 for each element
    elemes = Object.keys(elementList) // grabs the element list
    userElements[elemes[i]] = Math.floor(elementList[elemes[i]]['chance'] / 2 + Math.round(Math.random() * 20)); // math.random for each element
}
