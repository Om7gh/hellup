const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "le prénom est requis"],
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: [true, "le nom est requis"],
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: [true, "Email est requis"],
    unique: true,
    validate: [validator.isEmail, "s'il vous plait entre un valid email !"],
  },
  password: {
    type: String,
    required: [true, "Password est requis"],
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "confirmé votre Password est requis"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords sont différent",
    },
  },
  spécialité: {
    type: String,
    required: [true, "votre Spécialité est requis !"],
  },
  adresseCabinet: String,
  adressePersonnel: String,
  ville: String,
  phone: {
    type: String,
    required: [true, "votre numéro de téléphone est requis"],
    unique: true,
  },
  doctorImage: {
    type: String,
    required: [true, "Votre Photo et requis"],
  },
  travailHorair: String,
  condition: {
    type: String,
    default: "En service",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
