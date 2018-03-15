let model = require('./model')
client = model.getClient()


function saveClient (req, res) { // función para guardar implemento
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


module.exports = { // Exporta todos los metodos
    saveClient: saveClient,
    getAllClients : getAllClients
}