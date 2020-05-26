const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

app.get('/posts', (req, res) => {
  res.send({ key: 1 })
})

app.use('/', express.static('reactApp/build'))

app.listen(3030, () => console.log(3030))
