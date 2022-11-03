```js
Socket Messages
    
    Listen
    
        // Server
        StatusReceived         : "ro",
        AnnouncementReceived   : "announcement",
        EvalReceived           : "run",
        SocketError            : "error",

        // Trade Requests
        TradeRequestReceived   : "request",
        YourRequestAccepted    : "accepted",
        YourRequestDeclined    : "tradeCanceled",

        // In-Trade
        TradeAccepted          : "taccepted",
        TradeChangedMind       : "changedmind",
        
        // Chat
        ChatReceived           : "rmes"
    
    Emit
    
        // Trade Request
        IncomingRequestAccept  : "accept",
        IncomingRequestDecline : "decline",
        TradeRequestSend       : "trade",
        CancelOutgoingRequest  : "tcancel"
        
        // In-Trade
        TradeAccept            : "taccept",
        TradeCompleted         : "ntrade",
        TradeAtomsSet          : "catoms",
        TradeElementSet        : "celement",

        // Chat
        ChatSend               : "smes"
  }
```
