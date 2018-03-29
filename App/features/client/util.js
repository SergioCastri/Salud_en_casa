let model = require('./model')
client = model.getClient()


 function registerClient(req, res) {
  client.find({user: req.body.user}, '-_id -__v ', function (err, doc) {
    if(doc.length > 0){
      
        res.send({"message" : "Este nombre de usuario ya existe"})
  
    }else{ 
        let newclient = new client({
        name: req.body.name, user: req.body.user, lastName: req.body.lastName, email: req.body.email,
        age: req.body.age, gender: req.body.gender, password: (new Date()).getTime()
    
      })
      let pass = newclient.password;
      let user = newclient.user;
      newclient.save(function(){
        res.send({"usuario": user, "contraseña" : pass})
      })
    }
  });

 
  
  

};

function getAllClients(req, res) {
    client.find({}, '-_id -__v -email -password', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


function singIn(req, res) {
  client.find({user: req.body.user, password:req.body.password}, '-_id -__v ', function (err, doc) {
    if(doc.length > 0){
      
        res.send({"message" : "bienvenido " + doc[0].name})
        
    }else {
      res.send({ "message": "Usuario o contraseña incorrecta" })
    }

  });
}

async function changePass(req, res){
  console.log(req.body.actualPass);

var doc = await client.find({user: req.body.user, password: req.body.actualPass}, '-_id -__v ')
if(doc.length > 0){
      
       let pass1 = doc[0].password;
       let newclient = new client({
        name: doc[0].name, user: doc[0].user, lastName: doc[0].lastName, email:doc[0].email,
        age: doc[0].age, gender: doc[0].gender, password: req.body.newPass
    
      })

      newclient.save(function(){})
        
      client.findOneAndRemove({user:req.body.user, password: pass1}, function(err) {
        res.send({"message" : "contraseña cambiada"})
      });
    }else {
      res.send({ "message": "Usuario o contraseña incorrecta" })
    }

}


module.exports = { // Exporta todos los metodos
  registerClient: registerClient,
    getAllClients : getAllClients,
    singIn: singIn,
    changePass: changePass
}