const {Router}= require('express');

const {getAllPosts,getPost,createPost,updatePost,deletePost} =require('../controllers/PostsController');

const {  authUser, getAllUsers,getUser,updateProfile, deleteAccount } = require('../controllers/UserController');

const router = Router();

/** 
** POST ROUTES
*/
router.get('/',getAllPosts)

router.get('/:id',getPost)

router.post('/',createPost)

router.put('/post/:id',updatePost)

router.delete('/post/:id',deletePost)

/** 
**USER ROUTES
*/
router.get('/auth',authUser)
router.get('/users',getAllUsers)
router.get('/user-profile/:id',getUser)
router.post('/auth',createUser)
router.put('/account/:id',updateProfile)
router.delete('/account/:id',deleteAccount)

module.exports=router;