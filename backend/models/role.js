//controle y administre todo lo de mongo db
import mongoose from "mongoose";
//crear un esquema es el diagrama
//eso nadie puede cambairlo por eso es const
//todo queda guardado ahi y con ella se guardan roles
//.schema permite crear esas funciones
 const roleSchema = new mongoose.Schema(
    //el id lo genera automaticamente 
    {
       // name: {type:String} o para primitivos name:String
       name:String,
       description: String,
       //registra la fecha  actual con el now
       registerDate: {type: Date, default: Date.now},
       dbStatus: Boolean,

     }
 );
//arriba se creo el diagrama q va a guardar el backend y despues necesitamos
//que cree la coleccion en compas  y ese role que se creo se lleve el q tiene
 const role =  mongoose.model("role",roleSchema);

 export default role