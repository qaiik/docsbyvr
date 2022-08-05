// this is actually a duplicate of sell dupes, but edited in the middle.
let x = confirm('Are you use you want to do this? This is a very dangerous action.\nScript by VillainsRule.'); // kill switch
if (x) {
  alert('Check the console for your sell history!');

  $.get('/api/user/elements', function(data) {
    window.userElements = JSON.parse(data)
    Object.keys(elementList).forEach(element => sell(element))
  })

  async function sell(element) {
    var amt = window.userElements[element]
    if (-1 >= amt) return // diff. between dupes & all is the -1
    $.post(`/api/sell/`, `element=${element}&quantity=${amt}`, function() {
      isNaN(amt) ? "" : console.log(`Sold ${amt} ${element}(s)`);
    })
  }
} else {
  alert('Script cancelled.');
}
