import http from 'http'

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, {
      "content-type": "text/html"
    })
    console.log("connection successful")
    res.end(`<h1>This is a home page</h1>
    <table border="1">
     <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
        <td>Delhi</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>22</td>
        <td>Mumbai</td>
      </tr>
    </table>`)

  } else if (req.url === '/about') {
    res.writeHead(200, {
      "content-type": "text/html"
    })
    console.log("connection successful")
    res.end("<h1>This is an about page</h1>")

  } else {
    res.writeHead(404, {
      "content-type": "text/html"
    })
    res.end("<h1>Error: Page not found</h1>")
  }
})

server.listen(786, () => {
  console.log(`Server is listening on http://localhost:786`)
})
