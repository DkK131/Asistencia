export default(io) => {

    io.on('connection', (socket) => {
        console.log("Nueva conexion");
    })

}