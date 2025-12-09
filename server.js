import http from 'node:http'

const PORT= 8000

const server =http.createServer((req,res)=>{
    console.log(req.url)
})


server.listen(PORT, ()=>console.log(`Server: ${PORT}`))