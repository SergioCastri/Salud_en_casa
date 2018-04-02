let model = require('./model')
userAdmin = model.getAdminUser()
userMessenger = model.getMessengerUser()

function saveAdminUser(req, res) {
  userAdmin.find({ user: req.body.user }, '-_id -__v ', function (err, doc) {
    if (doc.length > 0) {

      res.send({ "message": "Este nombre de usuario ya existe" })

    } else {
      let newAdminUser = new userAdmin({
        name: req.body.name, user: req.body.user, email: req.body.email,
        age: req.body.age, password: (new Date()).getTime()

      })
      let pass = newAdminUser.password;
      let user = newAdminUser.user;
      newAdminUser.save(function () {
        res.send({ "usuario": user, "contraseña": pass })
      })
    }
  });
}

  function saveMessengerUser(req, res) {
    userMessenger.find({ user: req.body.user }, '-_id -__v ', function (err, doc) {
      if (doc.length > 0) {

        res.send({ "message": "Este nombre de usuario ya existe" })

      } else {
        let newMessengerUser = new userMessenger({
          name: req.body.name, user: req.body.user, email: req.body.email,
          age: req.body.age, hours: req.body.hours, password: (new Date()).getTime()

        })
        let pass = newMessengerUser.password;
        let user = newMessengerUser.user;
        newMessengerUser.save(function () {
          res.send({ "usuario": user, "contraseña": pass })
        })
      }
    });
};

  function getAllUserAdmin(req, res) {
    userAdmin.find({}, '-_id -__v ', function (err, doc) {
      res.status(200).jsonp(doc)
    });
  }
  function getAllUserMessenger(req, res) {
    userMessenger.find({}, '-_id -__v ', function (err, doc) {
      res.status(200).jsonp(doc)
    });
  }


  function singInAdmin(req, res) {
    userAdmin.find({ user: req.body.user, password: req.body.password }, '-_id -__v ', function (err, doc) {
      if (doc.length > 0) {
         res.send({ "messsage": "bienvenido " + doc[0].name, "job":"adminUser"})
      } else {
        res.send({ "message": "Usuario o contraseña incorrecta" })
      }

    });
}

function singInMessenger(req, res) {
  userMessenger.find({ user: req.body.user, password: req.body.password }, '-_id -__v ', function (err, doc) {
    if (doc.length > 0) {
       res.send({ "messsage": "bienvenido " + doc[0].name, "job":"messengerUser" })
    } else {
      res.send({ "message": "Usuario o contraseña incorrecta" })
    }

  });
}


async function changePassAdmin(req, res){

var doc = await userAdmin.find({user: req.body.user, password: req.body.actualPass}, '-_id -__v ')
if(doc.length > 0){
      
       let pass1 = doc[0].password;
       let newUserAdmin = new userAdmin({
        name: doc[0].name, user: doc[0].user, email:doc[0].email,
        age: doc[0].age, password: req.body.newPass
    
      })

      newUserAdmin.save(function(){})
        
      userAdmin.findOneAndRemove({user:req.body.user, password: pass1}, function(err) {
        res.send({"message" : "contraseña cambiada"})
      });
    }else {
      res.send({ "message": "Usuario o contraseña incorrecta" })
    }

}



async function changePassMessenger(req, res){

  var doc = await userMessenger.find({user: req.body.user, password: req.body.actualPass}, '-_id -__v ')
  if(doc.length > 0){
        
         let pass1 = doc[0].password;
         let newUserMessenger = new userMessenger({
          name: doc[0].name, user: doc[0].user, email:doc[0].email,
          age: doc[0].age, hours: doc[0].hours, password: req.body.newPass
      
        })
  
        newUserMessenger.save(function(){})
          
        userMessenger.findOneAndRemove({user:req.body.user, password: pass1}, function(err) {
          res.send({"message" : "contraseña cambiada"})
        });
      }else {
        res.send({ "message": "Usuario o contraseña incorrecta" })
      }
  
  }




  module.exports = { // Exporta todos los metodos
    saveAdminUser: saveAdminUser,
    saveMessengerUser :saveMessengerUser,
    getAllUserAdmin: getAllUserAdmin,
    getAllUserMessenger : getAllUserMessenger,
    singInMessenger: singInMessenger,
    singInAdmin:singInAdmin,
    changePassMessenger: changePassMessenger,
    changePassAdmin :changePassAdmin

  }