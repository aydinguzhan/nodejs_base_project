import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({
    level: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    proc_type: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    log: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

class Autitlogs extends mongoose.Model { }

schema.loadClass(Autitlogs)



export default mongoose.model('autitlogs', schema);;
