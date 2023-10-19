import mongoose from "mongoose"

export interface IBookModel extends mongoose.Document{
    title:string,
    author:string,
    publishYear:number

}

export const BookSchema=new mongoose.Schema<IBookModel>({
    title:{
        type:String,
        required: [true, "Missing title"]
    },
    author:{
        type:String,
        required: [true, "Missing author"]
    },
    publishYear:{
        type:Number,
        required: [true, "Missing publishYear"]
    },
})

export const BookModel = mongoose.model<IBookModel>("BookModel", BookSchema, "books");
