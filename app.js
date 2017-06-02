require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 6666
const cors = require('cors')
const house = require('./routes/house')
const image = require('./routes/image')
// const imageURL= require('./routes/imageURL')


app.use(cors())
// app.use(cors({origin: 'https://realestate-767c2.firebaseapp.com/'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/house', house)
app.use('/image', image)
// app.use('/imageURL', imageURL)



app.listen(PORT, function () {
  console.log("Your REALESTATE SITE is running on port:" + PORT);
})
