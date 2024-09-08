import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({
    role_name: {
        type: String,
        required: true
    },

    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        unique: true
    },

}, {
    versionKey: false,
    timestamps: true
});

class Roles extends mongoose.Model { }

schema.loadClass(Roles)



export default mongoose.model('roles', schema);;
