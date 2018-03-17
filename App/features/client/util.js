let model = require('./model')
client = model.getClient()


function registerClient (req, res) { // función para guardar implemento
  let newclient = new client ({
    name:req.body.name,  user : req.body.user, country : "", city : "", region : "", lat : "", long : "",
    password: req.body.password, job: "Cliente"

  })

  
  newclient.save(function () {
    res.send({"message" :"Usuario registrado exitosamente"})
  })
};

function getAllClients(req, res) {
    client.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


function singIn(req, res) {
  client.find({user: req.body.user, password:req.body.password}, '-_id -__v ', function (err, doc) {
    if(doc.length > 0){
        let jobClient = doc[0].job; 
        res.send({"message" : jobClient})
        
    }else {
      res.send({ "message": "Usuario o contraseña incorrecta" })
    }

  });
}


module.exports = { // Exporta todos los metodos
  registerClient: registerClient,
    getAllClients : getAllClients,
    singIn: singIn
}