import express from 'express';
import User from '../models/userModel.js';
const userRouter = express.Router();


userRouter.get("/", async (req, res) => {
    const { email } = req.params()
    const user = await User.findOne({ email: email });
    return res.send({ message: " user" })
})


export default userRouter