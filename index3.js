import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const port = 3000
const _dirname = dirname(fileURLToPath(import.meta.url))


function parser(req, res, next){

    console.log(req.body);
    next()
}

app.use(parser)

// app.post("/submit", parser)

app.listen(port, ()=>{
    console.log(`engaged on port ${port}`)
})

app.get("/", (req,res)=>{
    res.sendFile(_dirname+"/index.html")
})