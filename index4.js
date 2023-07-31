import express from 'express'

const app = express()
const port = 3000


app.get("/", (req, res)=>{
    res.send("Holla")
})

function logtype(req, res, next){
    console.log("cs active ", req.method)
    console.log(req.url)
     
    next()
}

app.use(logtype)

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

