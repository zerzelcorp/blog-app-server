
const Post = require('../models/PostSchema')

const getAllPosts = async(req,res)=>{
    try {

    const posts=await Post.find({})  

    res.status(200).send({res:posts})

    } catch (error) {
        res.status(404).send({message:`${error}`})
    }
}

const getPost = async(req,res)=>{
    const {id}= req.params
    try {
        const post = await Post.findById(id)  
    
        res.status(200).send({res:post})
    
        } catch (error) {
            res.status(404).send({message:`${error}`})
        }
}

 createPost = async (req,res)=>{

   const {author,title,description} = req.body;

    try {  
        let post = Post.findOne({title})

        if(post){
            return res.status(400).send({status:"error",msj:"already a post with this title"})
        }

         const newPost = new Post(req.body)
 
         await newPost.save()
 
         res.status(201).send({status:"ok",message:`post created${newPost}`}) 
    } catch (error) {
        res.status(409).send({status:"error","message":`${error}`})   
    }
}

 updatePost = async(req,res)=>{
     
    const {id} = req.params

    try {
        await Post.findByIdAndUpdate(id,req.body)
        res.status(200).send({status:"ok",message:`post with id:${id} has been updated`})        
    } catch (error) {
        res.status(404).send({status:"error",message:`${error}`})  
    }
}

const deletePost = async(req,res)=>{
    const {id}=req.params
try {
    await Task.deleteOne({id})
    res.status(200).send({status:`ok`,message:`task with id:${id} has been deleted`})
} catch (error) {
    res.status(404).send({"message":`${error}`})
}
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}