class Dto {
    static categoriesDto = (body) => {
        return {
            id: body.id ? body.id : undefined,
            name: body.name,
            is_active: body.is_active ?? true,
            created_by: body.userId
        }
    }
    static updatedDto = (body, newBody) => {
        return {
            ...body,
            ...newBody
        }
    }

}


export default Dto 