const express= require('express')
const app=express();
const port= 3000;

app.use(express.static('public'));


const indexRouter = require('./routers/main');



app.use('/',indexRouter);



app.listen(port,()=>{console.log('servidor funcionando en ' + port )})