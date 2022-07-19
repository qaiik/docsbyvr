```js
Socket Messages
    // received
    
    StatusReceived         : "ro",
    AnnouncementReceived   : "announcement",
    EvalReceived           : "run",
    ChatReceived           : "rmes",

    // trade received

    TradeRequestReceived   : "request",
    TradeRequestAccepted   : "accepted",
    TradeRequestDeclined   : "tradeCanceled",

    TradeReady             : "taccepted",
    TradeUnready           : "changedmind",

    TradeCompleted         : "ntrade",

    TradeAtomsSet          : "catoms",
    TradeElementSet        : "celement",

    // misc received

    SocketError            : "error",

    // sent

    ChatSend               : "smes",

    // trade sent

    TradeRequestAccept     : "accept",
    TradeRequestDecline    : "decline",
    TradeRequestSend       : "trade",

    TradeSetAtoms          : "atoms",
    TradeSetElement        : "element",
    
    TradeAccept            : "taccept",
    TradeDecline           : "tcancel"
  }
```
