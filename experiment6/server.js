
import express from "express"
import path from "path"
import {fileURLToPath} from "url"
const app=express()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
app.use(express.json())

app.get("/home",(req,res)=>{
    res.sendFile(path.join(dirname,"pages","home.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(dirname,"pages","about.html"))
})

app.listen("800",()=>{
    console.log("app is listening on port 300")
    console.log(`http://localhost:800/`)
})