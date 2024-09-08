import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


const userRoleSchema = new Schema({
    role_id: {
        type: String,
        required: true,
    }
})


const userRole = mongoose.model('userRole', userRoleSchema);

export default userRole