import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});


class Categories extends mongoose.Model { }

schema.loadClass(Categories)
export default mongoose.model('categories', schema);;