const User =require('../models/User');


//handle error 

const handleErrors = (err) => {

   console.log(err.message , err.code);
   let errors = {email:'' , password: ''};

   // validation errors
   if(err.message.includes('user validation failedd')){
       Object.values(err.errors).forEach(({properties})  =>{
        errors[properties.path] = properties.message;
       });

       
   }
   return error;

}


module.exports.signup_get =(req , res)=>{

    res.render('signup');
}

module.exports.login_get =(req , res)=>{

    res.render('login');
}

module.exports.signup_post = async(req , res)=>{
  const{ email,password } =req.body;
 
  try
  {
      const user =   await User.create({ email , password });
     res.status(201).json(user);
  }
  catch(err){
    const errors = handleErrors(err);
    res.status(404).json(errors);
  }
}


module.exports.login_post = async(req , res)=>{
    const {email , password} =req.body;

   console.log(email,password);
   res.send('user login');
   }