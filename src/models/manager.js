import { Schema, model, models } from "mongoose"

const ManagerSchema = new Schema({
   userName: {type:String},
   password: {type:String},
},{timestamps:true})

export const Manager = models?.Manager || model('Manager', ManagerSchema);