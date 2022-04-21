const {getAllTask,getTask,createTask,updateTask,deleteTask} =require('../controllers/taskController');

const {Router}= require('express')

const router = Router();

// router.get('/',(req,res)=>{
//     res.send({message:"holaaaaaaaaaaa"})
// })

router.get('/',getAllTask)

router.get('/:id',getTask)

router.post('/',createTask)

router.put('/:id',updateTask)

router.delete('/:id',deleteTask)

module.exports=router;