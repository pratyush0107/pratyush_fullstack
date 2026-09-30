import express from "express"
import cors from "cors"
import products from "./products.json" with { type: "json" };
import fs from "fs"

const app = express()

app.use(express.json())
app.use(cors)

app.get("/products",(req,res)=>{
    const data = fs.readFileSync("product.json","utf-8")
    const products=JSON.parse(data)
    res.json(products)
})
app.post("/product",(req,res)=>{
    // const data =fs.readFile("product.json","utf-8")
    // const products=JSON.parse(data)
    const newProduct={
        "id": products.length+1,
    "name":req.body.name ,
    "category": req.body.category,
    "description": req.body.description,
    "color": req.body.color
    }
    products.push(newProduct)
    fs.writeFile("product.json",JSON.stringify(products,null,2))

    res.status(201).json(newProduct);

})

app.listen(4000,()=>{
    console.log(`server is listening on port http://localhost:4000/`)
})
