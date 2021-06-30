const mongoose = require("mongoose");
const { isEmail } = require('validator');



const userschema = new mongoose.Schema({
    email:{

        type:String,
        required:[true, "please enter mail"],
        unique:true,
        lowercase:true,
        validate:[ isEmail,"please enter valide mail"]
    },
    password:{
        type:String,
        required:[true, "please enter an password"],
        minLength:[6 , "minimum password length is character"]

    },

});

const User =mongoose.model('user' ,  userschema);

module.exports=User;
