import Booksschema from '../model/books'

import mongoose from 'mongoose';
import res from 'express/lib/response';

// prepare the mongoose to generate class create collection to be tied to the schema, with schema as the dependence

const Books= mongoose.model('LibraryBook',Booksschema)

export const GetAllBooks=(req,res)=>{

    Books.find({},(err,result)=>{
        if(err)
        res.json(err)
        else
        res.json(result)
    })


}


export const SearchBook=(req,res)=>{

    Books.find({Title:req.body.Title},(err,result)=>{
        if(err)
        res.json(err)
        else
        res.json(result)
    })
}


export const CreateBook=(req,res)=>{

    let abook= new Books(req.body);
    abook.save((err,result)=>{
        if(err)
        res.json(err)
        else
        res.json(result)

    });

}