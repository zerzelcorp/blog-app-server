
const User = require("../models/UserSchema");

const authUser = async (req, res) => {
  // const { id ,email,password} = req.body;
  try {
    const userAuth = User.findById(req.body.id);
    if(userAuth){
      if ( userAuth.email === req.body.email  && userAuth.password === req.body.password ) {
       res.redirect('home')
       res.status(200).send({status:"ok"})
      }
    }
  } catch (error) {
      res.status(403).send({status:"error",message:`${error}`})
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ res: users });
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).send({ res: user });
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

createUser = async (req, res) => {

 const {email,password} = req.body;

//  const user = User.exists(email)
// if(user){
//    res.status(405).send({status:"error","message":`User already exist`})
//   }else{
//   }
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ status: "ok", message: `user created${newUser}` });
  } catch (error) {
    res.status(409).send({ status: "error", message: `${error}` });
  }
};

updateProfile = async (req, res) => {
  const { id } = req.params;
  try {
    if(User.exists(id)){
      await User.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .send({ status: "ok", message: `user with id:${id} has been updated` });
    }else{
      res.status(404).send({ status: "error", message:"user not found"});
    }
  } 
  catch (error) {
    res.status(404).send({ status: "error", message: `${error}` });
  }
};

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    if(User.exists(id)){
      await User.deleteOne({ id });
      res.status(200).send({
          status: `ok`,
          message: `account with id:${id} has been deleted`,
        });
    }else{res.status(404).send({status:"error",message:"account does not exist"})}
  } catch (error) {
    res.status(404).send({ message: `${error}` });
  }
};

module.exports = {
  authUser,
  getAllUsers,
  getUser,
  createUser,
  updateProfile,
  deleteAccount,
};
