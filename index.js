const express = require("express")
const api = express()


const port = process.env.PORT || 3000

api.get("/",  (req, res) => {
    res.send("testing here now")
})

api.listen(port,() => {
    console.log('listing dor 3000 here now', port)
})


