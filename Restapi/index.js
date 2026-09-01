import express from "express"

const app= express();
app.use(express.json());
let users = [
    {
        id:1,
        name:"a",
        email:"A@abes.ac.in"
    },
    {
        id:2,
        name:"b",
        email:"B@abes.ac.in"
    }
]
app.get("/user",(req,res)=>{
   res.json(users[0])
})
app.post("/user",(req,res)=>{
    const user ={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email

    }

    users.push(user)
    res.json(users)
})
app.listen("200",()=>{
console.log("app is listening on http://localhost:200/user")
})
