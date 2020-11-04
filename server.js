const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Helloooooooooo')
})

app.get('/test', (req, res) => {
  res.send([1,2, 3])
}
)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`))