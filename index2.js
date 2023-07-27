import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const port = 3000

const _dirname = dirname(fileURLToPath(import.meta.url))

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})

app.get("/", (req, res)=>{
    res.sendFile(_dirname+"/index.html")
})