const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => 
  res.json([{
      name: 'Devin',
      email: 'devinjpowers@gmai.com'

},
{
    name: 'Austin',
    email: 'austin@gmail.com'

},
{
    name: 'Joe',
    email: 'joerogan@gmail.com'

}


]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

