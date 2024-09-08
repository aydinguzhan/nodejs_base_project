import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({

    role_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
}, {
    timestamps: true
});

class RolePrivileges extends mongoose.Model { }

schema.loadClass(RolePrivileges)



export default mongoose.model('rolePrivileges', schema);;
