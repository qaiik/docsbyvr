$.get('/api/user/elements', function(data) { // calls the API for elements, gets a user's elements
    window.userElements = JSON.parse(data) // sends it to a format we can return to later without fetching again
    Object.keys(elementList).forEach(element => sell(element)) // gets the API ready to sell
})

async function sell(element) {
    var amt =  window.userElements[element] - 1 // syntax to check if the number is above 1 and act
    if (0 >= amt) return // syntax to check if the number is above 1 and act
    $.post(`/api/sell/`, `element=${element}&quantity=${amt}`, function() { // calls the api's sell sell
        isNaN(amt) ? "" : console.log(`Sold ${amt} ${element}(s)`) // calls error or says the results
    })
}
