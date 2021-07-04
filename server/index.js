import http from 'http'
import querystring from  'querystring'

let server = http.createServer()
server.on('request' , (req,res) => {
    switch(req.url){
        case '/': 
           console.log({req}); 
        break
    }
    // res.write()
    res.end(JSON.stringify({msg: 'Hi'}))
})

server.listen(8100, ()=> {
    console.log('server listening on 8100');
})