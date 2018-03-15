let model = require('./model')
medicament = model.getMedicament()


function saveMedicament (req, res) { // función para guardar implemento
  let newMedicament = new medicament ({
    medicament : req.body.medicament, quantity : req.body.quantity, value: req.body.value
  })

  newMedicament.save(function () {
    res.send({"message" :"Usuario registrado exitosamente"})
  })
};

function getAllMedicament(req, res) {
    medicament.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


module.exports = { // Exporta todos los metodos
    saveMedicament: saveMedicament,
    getAllMedicament : getAllMedicament
}