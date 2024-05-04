import express from "express";
import productsController from "../controllers/products.controller.js";

const router = express.Router();

/* GET products */
router.get('/', productsController.get);

/* POST product */
router.post('/', productsController.create);

/* PUT product */
router.put('/:id', productsController.update);

/* DELETE product */
router.delete('/:id', productsController.remove);

export default {
    router
};