const mongoose = require("mongoose");

const dossierMedicalSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "nom complet est requis"],
  },
  assiranceType: {
    type: String,
    required: [true, "assirance type est requis"],
  },
  age: {
    type: Number,
    required: [true, "l'age de patient est requis"],
  },
  Atcds: {
    type: String,
    required: [true, "Atcds est requis"],
  },
  diag: {
    type: String,
    required: [true, "diagnostic est requis"],
  },
  bilant: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const DossierMedical = mongoose.model("Blogs", dossierMedicalSchema);

module.exports = DossierMedical;
