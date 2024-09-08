import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({
    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


class Categories extends mongoose.Model { }

schema.loadClass(Categories)
export default mongoose.model('categories', schema);;