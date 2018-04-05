const express = require('express')

let app = new express()

require('./server')(app)
var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Corriendo en el puerto... ${port}`)
})