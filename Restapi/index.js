import express from "express"

const app= express();
app.use(express.json());
// let users = [
//     {
//         id:1,
//         name:"a",
//         email:"A@abes.ac.in"
//     },
//     {
//         id:2,
//         name:"b",
//         email:"B@abes.ac.in"
//     }
// ]
// app.get("/user",(req,res)=>{
//    res.json(users[0])
// })
// app.post("/user",(req,res)=>{
//     const user ={
//         id:users.length+1,
//         name:req.body.name,
//         email:req.body.email

//     }

//     users.push(user)
//     res.json(users)
// })
// app.put("/user/:id", (req, res) => {
//     let user = users.find(u => u.id == req.params.id);
//     if (!user) {
//         return res.status(404).json({
//             message: "User not found"
//         });
//     }
//     user.name = req.body.name;
//     user.email = req.body.email;
//     res.json({
//         message: "User updated successfully",
//         user: user
//     });
// });
// app.delete("/delete/:id",(req,res)=>{
//     users=users.filter(u=>u.id!=req.params.id);
//     res.json({
//         "message":"user deleted sucessfully",
//         "user":users
//     }) 
// })
// app.listen("200",()=>{
// console.log("app is listening on http://localhost:200/user")
// }):user
    

import products from "./products.json" with { type: "json" };


app.use(express.json());


app.get("/product/:id", (req, res) => {
const product = products.find(
(product) => product.id == req.params.id
);


if (!product) {
    return res.status(404).json({
        message: "Product not found"
    });
}

res.json(product);


});

// Add a new product
app.post("/add", (req, res) => {
const product = {
id: products.length + 1,
name: req.body.name,
category: req.body.category,
description: req.body.description,
color: req.body.color
};


products.push(product);

res.status(201).json({
    message: "Product added successfully",
    product: product
});


});

// Start server
app.listen(300, () => {
console.log("App is listening on http://localhost:300/");
});
