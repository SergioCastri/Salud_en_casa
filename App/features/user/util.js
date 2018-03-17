let model = require('./model')
user = model.getUser()


function saveUser (req, res) { // función para guardar implemento
  let newUser = new user ({
    id : req.body.id, name:req.body.name, country:req.body.country, user : req.body.user,
    password: req.body.password, job: "Medico"

  })

  newUser.save(function () {
    res.send({"message" :"Usuario registrado exitosamente"})
  })
};

function getAllUser(req, res) {
    user.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


function singIn (req, res){
  user.find({user: req.body.user, password:req.body.password}, '-_id -__v ', function (err, doc) {
      if(doc.length > 0){
          let jobUser = doc[0].job; 
          let countryUser = doc[0].country; 
          res.send({"job" : jobUser, "country" : countryUser})
      }else{
          res.send({"message" : "Usuario o contraseña incorrecta"})
      }
      
  });
  
  
} 

module.exports = { // Exporta todos los metodos
    saveUser: saveUser,
  getAllUser : getAllUser,
  singIn : singIn 
}