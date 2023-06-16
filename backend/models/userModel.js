import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Joi from "joi";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 40,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  role: {
    type: String,
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

function validateUserRegister(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().min(5).max(40).required(),
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(5).required(),
  });
  return schema.validate(obj);
}

function validateUserAuth(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(5).required(),
  });
  return schema.validate(obj);
}

export { validateUserRegister, validateUserAuth };
export default User;
