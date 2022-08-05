var x = prompt('Whose elements do you want to view?'); // grabs username
Array.from(document.getElementById('#elementList').children).forEach(a => a.remove()) // removes current elements, to avoid merging both collections
$.get('/api/elements?name=' + x, function(data) { // grabs user elem info
  elementList = JSON.parse(data);
});
$.get('/api/user/elements?name=' + x, function(data) { // grabs main info
  if (data === "{}" || data === "[]") { // checks if user has elements
    alert('This user has no elements!');
  } else if (data === "") { // checks if user exists
      alert('Cannot find user!\nAlso a glitch where this user may exist, but has no elements.');
  } else {
    document.getElementById("#elementRarity").innerText = "Common"; // appends element info
    document.getElementById("#elementRarity").style.color = "white";
    document.getElementById("#elementRarity").style.textShadow = "0px 0px 25px white";
    document.getElementById("#elementImage").src = "/image/elements/blax.png";
    document.getElementById("#elementName").innerText = "Betastar";
    document.getElementById("#elementPrice").innerText = "Can't be sold.";
    userElements = JSON.parse(data);
    Object.entries(userElements).forEach((entry) => { // image
      const [key, value] = entry;
      $(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList"); // appends elem to list
    });
    alert(x + '\'s elements have been loaded!'); // alerts of load
  }
});
window.currentElement = "blax"; // sets current element
window.currentQuantity = -1;
