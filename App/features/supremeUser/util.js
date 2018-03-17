let model = require('./model')

supremeUser = model.getSupremeUser()


function saveSupremeUser (req, res) { // función para guardar implemento
  let newSupremeUser = new supremeUser ({
    id : "1234567890", name: "Dairo", country:"Australia", user : "dairovergara9",
    password: "1234", job: "Supremo usuario",

  })

  newSupremeUser.save(function () {
    res.send({"message" :"Usuario registrado exitosamente"})
  })
};

function getAllSupremeUser(req, res) {
  supremeUser.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

function singIn (req, res){
  supremeUser.find({user: req.body.user, password:req.body.password}, '-_id -__v ', function (err, doc) {
    if(doc.length > 0){
        let jobSupremeUser = doc[0].job;
        console.log(jobSupremeUser)
        res.send({"message" : jobSupremeUser})
    }else{
          res.send({"message" : "Usuario o contraseña incorrecta"})
      }
      
  });
}

module.exports = { // Exporta todos los metodos
  saveSupremeUser: saveSupremeUser,
  getAllSupremeUser : getAllSupremeUser,
  singIn : singIn
}