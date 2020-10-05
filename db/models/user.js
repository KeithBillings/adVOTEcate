const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 10;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    unique: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.password;
    },
    versionKey: false
  }
});

userSchema.pre("save", async function() {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;