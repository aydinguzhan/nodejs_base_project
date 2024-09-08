import mongoose from "mongoose";
import { getEnv } from "./dotEnv.js";


const url = getEnv("MONGOO_DB_URL");


mongoose.connect(url)
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantısı başarısız:', err));

export default mongoose