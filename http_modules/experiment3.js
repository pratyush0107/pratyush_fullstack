import http from 'http'

const server = http.createServer((req,res)=>{
    try{
        res.writeHead(200,{"content-type": "text/html"})
        res.end( "<h1>hello world</h1>")
    } catch(error){
        res.writeHead(404,{"content-type": "text/html"})
        res.end("<h1>Error Page Not Found </h1>")
    }
    
})

server.listen(2000,()=>{
    console.log(`server is listening on port`)
    console.log(`http://localhost:2000`)
})