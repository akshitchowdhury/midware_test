import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const _dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})

app.get("/", (req, res)=>{
    res.sendFile(_dirname+"/index.html")
})



app.post("/submit", (req,res)=>{
    console.log(req.body)
})

