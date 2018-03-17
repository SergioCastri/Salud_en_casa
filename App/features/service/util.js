let model = require('./model')

servicePublicate = model.getServicePublicate()
serviceAttended = model.getServiceAttended()


function publicateService(req, res) {
        let newServicePublicate = new servicePublicate({
            nameClient: req.body.nameClient, typeService: req.body.typeService, attended: "No", country : "",
            city : "", region : "", lat : "", long : ""

        }) 
                  
        
        newServicePublicate.save(function () {
            res.send({"message":"Servicio publicado"})
        })

};

function attendedService(req, res) {
    servicePublicate.findOneAndRemove({nameClient: req.body.nameClient, typeService: req.body.typeService, country :req.body.country,
    city : req.body.city, region : req.body.region, lat : req.body.lat, long : req.body.long}, function (err, doc) {
      });

    let newServiceAttended = new serviceAttended({
        nameClient: req.body.nameClient, typeService: req.body.typeService, nameDoctor: req.body.nameDoctor,
        attended: "Si", observations: req.body.observations, country : "", city : "", region : "", lat : "", long : "",

    }) 
    
    newServiceAttended.save(function () {
        res.send({"message":"Servicio asistido"})
    })

};



function getAllServicesPublicate(req, res) {
    servicePublicate.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

function getAllServicesAttended(req, res) {
    serviceAttended.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

module.exports = { // Exporta todos los metodos
    getAllServicesPublicate: getAllServicesPublicate,
    attendedService : attendedService,
    publicateService : publicateService,
    getAllServicesAttended : getAllServicesAttended
}