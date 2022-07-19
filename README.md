# Betastar code snippets
These are some Betastar code snippets!

Made for devs, these can help you make a script SUPER quickly.

## socket.io
socket.io plays a HUGE part in Betastar. This manages trade & chat.
socket.io uses socket.on and socket.off, and you can modify these.

## Chat
So the Chat has a TON of snippets.
### Send Message
You must use the socket.emit, so this:
```js
socket.emit('smes', 'e');
```
We are assuming that 'e' is the message.
Now, if we wanted to let the user set their own message easily:
```js
var e = prompt('Enter msg to send:');
socket.emit('smes', e);
```
If you wanted to spam the chat, Betastar uses a special system to check if the message is the same as the last one.
So you could add a ```Math.random()``` to the script and use ```setInterval```.
### Block User
So, in blockUser.js, we check every message emitted.
```js
socket.on("rmes")
```
After some syntax things to get to the user's name, we get to this:
```js
if (getBlockedUsers().includes(user)) {
      msg.remove()
}
```
Since ```msg``` defines a given message, this works.
Now, this script actually doesn't stop direct pings.
### Pings
```js
if (messageJson.message.toLowerCase().includes("@everyone")) {
document.getElementById(messageId).style.background = "#2a2e00"
document.getElementById(messageId).style.filter = "drop-shadow(0px 0px 15px #2a2e00)"
var sound = new Audio('/audio/mention.mp3');
sound.play();
}
```
Above is the code for the everyone ping. As you can see, it is done with manual changes such as the background.
This pings YOU:
```js
if (messageJson.message.toLowerCase().includes(`@${userName}`))
```
If you want to end pings, just use this:
```js
var userName = "gygvbjhgvbhjgfcvbnjhgfcvbjhgtfcvghgfcg";
```
## Trade
### Functions
Here are some nice functions that I find useful:
```js
setElement();
setAtoms();
acceptTrade();
declineTrade();
cancelTradeRequest();
```

## Socket
## EmitTypes
Check socketmessages.md for all the socket messages.

## Scambot
```js
socket.on("request", (r)=>{
    socket.emit("accept", r.user)
    s.emit("atoms", "300")
    s.on("taccepted", (a) => {
        s.emit("atoms", 2)
        s.emit("taccept")
    })
})
```
