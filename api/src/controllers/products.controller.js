import productsService from "../services/products.service.js";

async function get(req, res, next) {
    try {
        res.json(await productsService.getProducts(req.query));
    }
    catch (err) {
        console.error('Get error: ', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        res.json(await productsService.createProduct(req.body));
    }
    catch (err) {
        console.error('Create error: ', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await productsService.updateProduct(req.params.id, req.body));
    }
    catch (err) {
        console.error('Update error: ', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await productsService.deleteProduct(req.params.id));
    }
    catch (err) {
        console.error('Delete error', err.message);
        next(err);
    }
}

export default {
    get,
    create,
    update,
    remove
}