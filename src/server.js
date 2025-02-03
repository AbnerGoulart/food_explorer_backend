const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const uploadConfig = require('./config/upload')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(routes)
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

const PORT = process.env.SERVER_PORT || 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))