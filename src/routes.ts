
import { Request,Response } from "express";
import CreateCourseService from './CreateCourseService'

export function createCourse(req:Request,res:Response){

  CreateCourseService.execute({
    name: "ReactJs",
    //duration: 10,
    educator: "Dani"
  })

  return res.send()

}