# Chat    
### SendMessage
```js
let message = '';
socket.emit('smes', message);
```
### Spam
```js
setInterval(() => socket.emit('smes', 'LMFAO | ' + Math.random()), 3000);
```
    
## Pings
### Everyone
```js
socket.on('rmes', (messageJson) => {
  if (messageJson.message.toLowerCase().includes("@everyone")) { // messageJson is auto defined by Betastar
    document.getElementById(messageId).style.background = "#2a2e00"
    document.getElementById(messageId).style.filter = "drop-shadow(0px 0px 15px #2a2e00)"
    var sound = new Audio('/audio/mention.mp3');
    sound.play();
  }
})
```
### You
```js
if (messageJson.message.toLowerCase().includes(`@${userName}`))
```
### Stop Direct Pings
```js
var userName = "NO-NAME";
```
