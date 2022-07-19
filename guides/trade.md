# Trade
## Actions
### In Trade
```js
setElement();
setAtoms();
acceptTrade();
declineTrade();
```
### Outside Trade
```js
startTradeRequest();
cancelTradeRequest();
```
## Scambot
```js
socket.on("request", (r)=>{
    socket.emit("accept", r.user)
    s.emit("atoms", "300")
    s.on("taccepted", (a) => {
        s.emit("atoms", "2")
        s.emit("taccept")
    })
})
```
