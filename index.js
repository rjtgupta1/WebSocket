import express from 'express';
import { WebSocketServer } from 'ws';


const app = express();

const server = app.listen(3000,()=>{
    console.log("Server is up!");
})

const wss = new WebSocketServer({ server })

wss.on('connection',(ws)=>{
    ws.on('error',(error)=>{
        console.log(error.message);
    })

    ws.on('message',(data)=>{
        console.log('Got the message %s : ',data);

        // console.log(typeof(data));

        ws.send("Hii Rajat..");
    })
})