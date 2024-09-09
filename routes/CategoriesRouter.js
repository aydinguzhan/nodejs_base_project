import { Router } from 'express';
import CategoriesModel from '../models/CategoriesModel.js';
import Response from '../lib/Response.js';
import CustomError from '../lib/Error.js';
import Dto from '../dto/dto.js';
class CategoriesRouter {
    constructor() {
        this.categoriesRouter = Router();
        this.initializeRouter()
    }

    initializeRouter() {
        this.categoriesRouter.get("/", this.getCategories);
        this.categoriesRouter.post("/", this.createdCategories);
        this.categoriesRouter.put("/:id", this.updatedCategories);
        this.categoriesRouter.delete("/:id", this.deleteCategories);
    }



    async getCategories(req, res) {
        try {
            let categories = await CategoriesModel.find({})

            res.send(Response.successResponse(categories))
        } catch (error) {
            res.status(400).send(Response.erorrResponse(400, error))

        }

    }
    async createdCategories(req, res) {
        const body = req.body;
        try {
            if (!body.name && !body.userId) {
                res.status(400).send(Response.erorrResponse(400, { message: "payload not valid", description: "name is not found" }))
            }
            let modelDto = Dto.categoriesDto(body)
            let createDto = await CategoriesModel.create(modelDto);
            res.status(201).send(Response.successResponse(createDto, 201))

        } catch (error) {
            res.status(404).send(Response.erorrResponse(404, error))
        }
    }
    async updatedCategories(req, res) {
        const { id } = req.params
        const body = req.body;
        try {
            if (!body.name && !body.id) {

                throw new CustomError(400, "Bad request", "payload or url not valid")
            }
            let oldCategorie = await CategoriesModel.findById(id);
            let newCategories = await CategoriesModel.findByIdAndUpdate({ _id: id }, { $set: Dto.updatedDto(oldCategorie.toObject(), body) }, { new: true });

            res.status(200).send(Response.successResponse(newCategories.toObject(), 200))


        } catch (error) {
            res.send(Response.erorrResponse(400, error))
        }
    }
    async deleteCategories(req, res) {
        const { id } = req.params


        try {
            if (!id) {
                throw new CustomError(400, "Id undefined", "id not valid")
            }
            let deleteCategories = await CategoriesModel.findByIdAndDelete({ _id: id })
            res.send(Response.successResponse(deleteCategories, 200));


        } catch (error) {
            res.status(400).send(Response.erorrResponse(400, error))
        }
    }
}




export default new CategoriesRouter().categoriesRouter