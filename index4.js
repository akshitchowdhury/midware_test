import express from 'express'

const app = express()
const port = 3000


app.get("/", (req, res)=>{
    res.send("Holla")
})

app.use((req, res, next)=>{
   console.log("cs active ", req.method)
     
    next()    
}
)

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

