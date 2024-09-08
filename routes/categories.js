import express from 'express';
const categoriesRouter = express.Router();


categoriesRouter.get("/", async (req, res) => {
    const { email } = req.params()
    return res.send({ message: " user" })
})


export default categoriesRouter