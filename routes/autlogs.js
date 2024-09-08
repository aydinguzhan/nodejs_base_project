import express from 'express';
const autlogsRouter = express.Router();


autlogsRouter.get("/", async (req, res) => {
    return res.send({ message: " user" })
})


export default autlogsRouter