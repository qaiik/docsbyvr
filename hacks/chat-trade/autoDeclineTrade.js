socket.on('request', (user) => { // when user has sent request
  let sentuser = `${user}`; // grabs username
  console.log(sentuser + ' attempted to send a request but was blocked.'); // logs trade
  $(".tradeRequest").remove(); // removes the popup
  socket.emit('decline'); // declines the trade
});
