//Inicializacion de comunicacion server-client
import app from './app';
import {Server as websocketserver} from 'socket.io';
import http from 'http';
import socket from "./socket";

/*import { connectDB } from './db';

connectDB();
*/
const server = http.createServer(app)
const httpServer = server.listen(3000)
console.log('Server listen from port 3000');

const io = new websocketserver(httpServer)
socket(io);



//Comunicacion Serial

const SerialPort = require('serialport').SerialPort;
const { DelimiterParser } = require('@serialport/parser-delimiter');

const puerto = new SerialPort(
    {
        path: 'COM5',
        baudRate: 9600
    });

const parser = puerto.pipe(new DelimiterParser({ delimiter: '\n' }))

parser.on('open', function(){
    console.log('Conexión abierta');
});

parser.on('data',function(data){
    var enc = new TextDecoder();
    var arr = new Uint8Array(data);
    const ready = enc.decode(arr)
    console.log(ready);
    // crea un nuevo objeto `Date`
    var today = new Date();
    // obtener la fecha y la hora
    var now = today.toLocaleString();
    console.log(now);
    io.emit('Asistencia', ready);
    io.emit('Hora', now);
});

puerto.on('error', function(err){
    console.log(err);
});
