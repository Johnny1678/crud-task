import { Router } from "express";
import Task from "../models/Task.js";

const router = Router()

router.get("/", async (req, res) => {
       const tasks = await Task.find().lean()
       console.log(tasks[0])
    
    res.render('index', {tasks: tasks})
})

router.post("/tasks/add", async (req, res) => {
   try {
    const task = Task(req.body)
    await task.save()
   res.redirect("/")
   } catch (error) {
    console.log(error)
   }
})

router.get("/edit/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        res.render('edit', {task} )
        
    } catch (error) {
        console.log(error.message)
    }

})

router.post('/edit/:id', async (req, res) => {
   await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
})




router.get("/about", (req, res) => {
    res.render('about')
})

export default router;