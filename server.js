var express = require('express');
var app = express();
app.get('/', function(request, res){
	//response.send('Hola Mundo desde NodeJS y Express');
	res.sendFile(__dirname + '/public/index.html');
})

app.listen(9090,function(){
   console.log('servidor corriendo correctamente.');
})
