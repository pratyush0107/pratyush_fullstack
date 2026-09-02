import { error } from 'console';
import http from 'http'

const server = http.createServer((req,res)=>{
    try{
      throw new Error("http break")
      res.writeHead(200,{"content-type": "text/html"})
      res.end('<h1 style="color: blue">hello world</h1>');
     
    } catch(error){
        res.writeHead(404,{"content-type": "text/html"})
        res.end(`<h1>Error Page Not Found ${error.message}</h1>`)
    }
    
})

server.listen(2000,()=>{
    console.log(`server is listening on port`)
    console.log(`http://localhost:2000`)
})