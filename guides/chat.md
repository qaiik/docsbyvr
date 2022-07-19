# Chat    
### SendMessage
```js
socket.emit('smes', 'e'); // if e is msg
```
### Spam
```js
function e() {
  socket.emit('smes', 'LMFAO | ' + Math.random());
}
setInteval(e, 3000);
// this is a rough draft
```
    
## Pings
### Everyone
```js
if (messageJson.message.toLowerCase().includes("@everyone")) {
document.getElementById(messageId).style.background = "#2a2e00"
document.getElementById(messageId).style.filter = "drop-shadow(0px 0px 15px #2a2e00)"
var sound = new Audio('/audio/mention.mp3');
sound.play();
}
```
### You
```js
if (messageJson.message.toLowerCase().includes(`@${userName}`))
```
### Stop Direct Pings
```js
var userName = "gygvbjhgvbhjgfcvbnjhgfcvbjhgtfcvghgfcg";
```
