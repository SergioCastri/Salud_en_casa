let model = require('./model')
medicament = model.getMedicament()


function saveMedicament (req, res) { // función para guardar implemento
  let newMedicament = new medicament ({
    medicament : req.body.medicament, category: req.body.category, description: req.body.description,
    characterist: req.body.characterist, quantity : req.body.quantity, volumen:req.body.volumen,
    value: req.body.value, photos:req.body.photos
  })

  newMedicament.save(function () {
    res.send({"message" :"medicamentos registrado exitosamente"})
  })
};

function getAllMedicament(req, res) {
    medicament.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}
getMedicamentByCategory

function getMedicamentByCategory(req, res) {
  medicament.find({category:req.body.category}, '-_id -__v ', function (err, doc) {
  res.status(200).jsonp(doc)
});
}


function getMedicamentByName(req, res) {
  medicament.find({medicament:req.body.medicament}, '-_id -__v ', function (err, doc) {
  res.status(200).jsonp(doc)
});
}

module.exports = { // Exporta todos los metodos
    saveMedicament: saveMedicament,
    getAllMedicament : getAllMedicament,
    getMedicamentByCategory:getMedicamentByCategory,
    getMedicamentByName: getMedicamentByName

}