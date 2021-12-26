const mongoose=require('mongoose');

const dataschema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Name is not provided"],
        unique:true,
    },
    email: { 
        type: String,
        required: [true,"Email is not provided"],
        match: /.+\@.+\..+/,
        unique: true,
      },
})

module.exports=mongoose.model('data',dataschema);