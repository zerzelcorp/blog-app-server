
const Task = require('../models/taskSchema')

const getAllTask = async(req,res)=>{
    try {
    const tasks=await Task.find({})  

    res.status(200).send({res:tasks})

    } catch (error) {
        res.status(404).send({message:`${error}`})
    }
}

const getTask = async(req,res)=>{
    const {id}= req.params
    try {
        const task = await Task.findById(id)  
    
        res.status(200).send({res:task})
    
        } catch (error) {
            res.status(404).send({message:`${error}`})
        }
}

 createTask = async (req,res)=>{
     const {title,description} = req.body;
    try {
    //  const task= Task.findOne({title,description})
    //  if(task){
    //     res.status(405).send({status:"error","message":`Task already exist`}) 
    //  }else{
         const newTask = new Task(req.body)
 
         await newTask.save()
 
         res.status(201).send({status:"ok",message:`task created${newTask}`}) 
    //  }
    } catch (error) {
        res.status(409).send({status:"error","message":`${error}`})   
    }
}

 updateTask = async(req,res)=>{
    const {id} = req.params
    try {
        await Task.findByIdAndUpdate(id,req.body)
        res.status(200).send({status:"ok",message:`task with id:${id} has been updated`})        
    } catch (error) {
        res.status(404).send({status:"error",message:`${error}`})  
    }
}

const deleteTask = async(req,res)=>{
    const {id}=req.params
try {
    await Task.deleteOne({id})
    res.status(200).send({status:`ok`,message:`task with id:${id} has been deleted`})
} catch (error) {
    res.status(404).send({"message":`${error}`})
}
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}