
const userModel = require('./user.model.js')
var jwt = require('jsonwebtoken');
var config = require('./config')


exports.signUp = function(req,res){

    console.log(req.body)

    userModel.findOne({email:req.body.email},function(err,data){
         
        if(err){
          console.log(err)
         res.send("Err Occured");

        }else if(data){
          console.log(data)
         res.send("User All Ready Exist")

        }else{
          console.log('i m there')
            var newUser = new userModel(req.body);
            newUser.password = newUser.generateHash(newUser.password)
            
            newUser.save()
                .then(item => {
                    res.send("item saved to database");
                })
                .catch(err => {

                    res.status(400).send("unable to save to database");
            });       
       } 
    }); 
};

exports.signIn = function(req,res){

    userModel.findOne({email : req.body.email}, function(err, user) {

        if(err) res.send("Error Occured")
        var newUser = new userModel();
        var pass = user.validPassword(req.body.password)
      
        if (user.validPassword(req.body.password)) {

          var token = jwt.sign({ id: config.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          res.status(200).send({ auth: true, token: token });
        } else {
          res.send("password not matched")
        }
    });
};

exports.error = function(req,res){

  // alert("put proper emailid")
  console.log('Error in email id')
  res.send("Error in email id")

}