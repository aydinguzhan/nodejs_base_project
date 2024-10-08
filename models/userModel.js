import { Schema } from "mongoose";
import mongoose from "../config/mongoose.js";


// Kullanıcı şeması oluşturuluyor
const schema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

class Users extends mongoose.Model { }

schema.loadClass(Users)



export default mongoose.model('users', schema);;
