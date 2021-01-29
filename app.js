const express = require('express');
const router = require('./routers')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)


app.listen(PORT , _=> console.log("Connected in port " , PORT))