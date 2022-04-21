const {Router}= require('express');

const {getAllPosts,getPost,createPost,updatePost,deletePost} =require('../controllers/PostsController');

const {loginUser,getAllUsers,getUser, updateProfile, deleteAccount,revalidateToken} = require('../controllers/UserController');

const {check} = require('express-validator');

const {validateFields} = require('../middlewares/validateFields');

const {validateJWT} = require('../middlewares/validate-jwt')

const router = Router();

/** 
** POST ROUTES
*/
router.get('/',(req,res)=>{
res.send(`Default endpoint😬`)
})

router.get('/posts',getAllPosts)

router.get('/post/:id',getPost)

router.post('/create-post',createPost)

router.put('/post/:id',updatePost)

router.delete('/post/:id',deletePost)

/** 
**USER ROUTES
*/

 router.get('/renew',validateJWT,revalidateToken)

router.post('/auth/login',
[
check('email','email is required').not().isEmpty().isEmail().normalizeEmail(),
check('password','psw is required').not().isEmpty(),
check('password','psw must be at least 6 length').isLength({min:6}),
validateFields
]
,
loginUser
)

router.post('/auth/register',
[
check('email','email is required').not().isEmpty().isEmail().normalizeEmail(),
check('password','psw is required').not().isEmpty(),
check('password','psw must be at least 6 length').isLength({min:6}),
validateFields
],
createUser
)

router.get('/users',getAllUsers)

router.get('/user/:id',getUser)

router.put('/account/:id',updateProfile)

router.delete('/account/:id',deleteAccount)

module.exports=router;