import express from 'express'

const app = express()
const port = 3000


app.get("/", (req, res)=>{
    res.send("Holla")
})

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

app.use((req, res, next)=>{
    console.log("Request method"), req.method
    req.url
})