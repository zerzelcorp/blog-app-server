const {Router}= require('express');

const {getAllPosts,getPost,createPost,updatePost,deletePost} =require('../controllers/PostsController');

const { updateProfile, deleteAccount, getUser, getAllUsers, authUser } = require('../controllers/UserController');

const router = Router();


router.get('/home',getAllPosts)

router.get('/post/:id',getPost)

router.post('/home',createPost)

router.put('/post/:id',updatePost)

router.delete('/post/:id',deletePost)
// USER ROUTES
router.get('/auth',authUser)
router.get('/users',getAllUsers)
router.get('/user-profile/:id',getUser)
router.put('/account/:id',updateProfile)
router.delete('/account/:id',deleteAccount)

module.exports=router;