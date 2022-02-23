import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';//to resolve __dirname not defined in ES module scope


const __filename = fileURLToPath(import.meta.url);// alot of issues stemmed from here need further research
const __dirname = dirname(__filename);
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/Library',{useNewUrlParser:true,useUnifiedTopology:true})


const app = express();
app.set('PORT',process.env.PORT||5000)

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static('public'))
app.use('/scripts',express.static('node_modules'));

app.get('/',(req,res)=>{
  //  res.sendFile(`${__dirname}/public/sampl.html`)

})


app.listen(app.get('PORT'),()=>{

    console.log("listening")
})