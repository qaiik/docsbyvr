const io = require("socket.io-client");

let socket = io.connect("https://betastar.org/", {
  transportOptions: {
    polling: {
      extraHeaders: {
        Cookie: "Account PHPSESSID"
      }
    }
  }
})

// You can now use socket.on() and socket.emit()
