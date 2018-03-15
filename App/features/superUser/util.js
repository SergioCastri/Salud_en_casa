let model = require('./model')

superUser = model.getSuperUser()


function saveSuperUser (req, res) { // función para guardar implemento
  let newSuperUser = new superUser ({
    id : req.body.id, name:req.body.name, country:req.body.country, user : req.body.user,
    password: req.body.password, job: "Super usuario"

  })

  newSuperUser.save(function () {
    res.send({"message" :"Usuario registrado exitosamente"})
  })
};

function getAllSuperUser(req, res) {
    superUser.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


module.exports = { // Exporta todos los metodos
  saveSuperUser: saveSuperUser,
  getAllSuperUser : getAllSuperUser
}