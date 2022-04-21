const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");

const {generateJWT}= require('../helpers/jwt');

const revalidarToken = () => {};

const loginUser = async (req, res) => {
  const {id,email,name,password} = req.body
try {
  const userAuth = User.findOne(email);

  if(!userAuth){
    return res.status(404).send({status:"error",msj:"user not found"})
  }
const validPsw= bcrypt.compareSync(password,User.password)

if(!validPsw){
  return res.status(400).send({status:"error",msj:"incorrect password"})
}

const token = await generateJWT(id,name)

res.status(200).send({
status:"ok",
id,
name,
email,
token,
})

setTimeout(()=>{
  res.redirect("home");
},3000)

} catch (error) {
  return res.status(500).send({ status:"error", msj:`${error}`});
}

};

createUser = async (req, res) => {
  const { email,name,password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({
        status: "error",
        msj: "Email in use",
      });
    }
    const newUser = new User({ email,name,password });
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password,salt);
    await newUser.save();
    res.status(201).send({ status: "ok", message: `user created${newUser}` });
  } catch (error) {
    res.status(409).send({ status: "error", message: `${error}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ res: users });
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .send({ status: "error", msj: "User does not exist" });
    }

    res.status(200).send({ res: user });
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

updateProfile = async (req, res) => {
  const { id } = req.params;
  try {
    if (User.exists(id)) {
      await User.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .send({ status: "ok", message: `user with id:${id} has been updated` });
    } else {
      res.status(404).send({ status: "error", message: "user not found" });
    }
  } catch (error) {
    res.status(404).send({ status: "error", message: `${error}` });
  }
};

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    if (User.exists(id)) {
      await User.deleteOne({ id });
      res.status(200).send({
        status: `ok`,
        message: `account with id:${id} has been deleted`,
      });
    } else {
      res
        .status(404)
        .send({ status: "error", message: "account does not exist" });
    }
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

module.exports = {
  loginUser,
  getAllUsers,
  getUser,
  createUser,
  updateProfile,
  deleteAccount,
  revalidarToken,
};
