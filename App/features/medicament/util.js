let model = require('./model')
let modelRecord = require('../record/model')
medicament = model.getMedicament()
record = modelRecord.getRecord()

function saveMedicament(req, res) { // función para guardar implemento
  medicament.find({ medicament: req.body.medicament }, '-_id -__v ', function (err, doc) {
    if (doc.length > 0) {

      res.send({ "message": "Este medicamento ya existe" })

    } else {
      let newMedicament = new medicament({
        medicament: req.body.medicament, category: req.body.category, description: req.body.description,
        characterist: req.body.characterist, quantity: req.body.quantity, volumen: req.body.volumen,
        value: req.body.value, photos: req.body.photos
      })

      newMedicament.save(function () {
        res.send({ "message": "medicamentos registrado exitosamente" })
      })
    }
  })
}

function getAllMedicament(req, res) {
  medicament.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


function getMedicamentByCategory(req, res) {
  medicament.find({ category: req.body.category }, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


function getMedicamentByName(req, res) {
  medicament.find({ medicament: req.body.medicament }, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

function deleteMedicament(req, res) {
  medicament.findOneAndRemove({ medicament: req.params.medicament }, function (err) {
    if (!err) {
      res.send({ "message": "Medicamento eliminado correctamente" });
    }else{
      console.log(err)
    }
  });
}


async function updateMedicament(req, res) { 
  var doc1 = await medicament.find({medicament: req.body.medicament}, '-_id -__v')
  medicament.findOneAndRemove({medicament: req.body.medicament}, function (err) {
  });

  let newMedicament = new medicament({
    medicament: req.body.medicament, category: req.body.category, description: req.body.description,
    characterist: req.body.characterist, quantity: req.body.quantity, volumen: req.body.volumen,
    value: req.body.value, photos: req.body.photos
  })
  var doc2 = newMedicament
  newMedicament.save(function () {
  })

  let newRecord = new record ({
    user: req.body.user, recordOne : doc1, recordTwo: newMedicament
  })
  newRecord.save(function(){
    res.send({"message": "actualizado correctamente"})
  })
 
};


module.exports = { // Exporta todos los metodos
  saveMedicament: saveMedicament,
  getAllMedicament: getAllMedicament,
  getMedicamentByCategory: getMedicamentByCategory,
  getMedicamentByName: getMedicamentByName,
  deleteMedicament : deleteMedicament,
  updateMedicament: updateMedicament

}