const io = require("socket.io-client")l

let socket = io.connect("https://betastar.org/", {
  transportOptions: {
    polling: {
      extraHeaders: {
        Cookie: "your betastar cookie"
      }
    }
  }
})
