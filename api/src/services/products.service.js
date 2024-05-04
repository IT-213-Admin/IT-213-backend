// initial products here
let products = [
    {
        productID: 1,
        name: 'First Product',
        description: 'This is the first product.',
        price: 100
    },
    {
        productID: 2,
        name: 'Second Product',
        description: 'This is the second product.',
        price: 200
    }
];

let idCounter = products.length;

function getProducts(args) {
    const res = args.searchString ? products.filter((product) => (product.name.includes(args.searchString))) : products;
    return new Promise((resolve) => {
        // setTimeout for artificial delay
        setTimeout(() => {
            resolve({
                products,
                meta: {
                    totalCount: res.length
                }
            });
        }, 1000);
    });
}

function createProduct(productInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            products.push({
                productID: ++idCounter,
                name: productInfo.name,
                description: productInfo.description,
                price: productInfo.price
            });
            resolve({
                message: 'Product added.',
            });
        }, 1000);
    });
}

function updateProduct(id, productInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            products = products.map((product) => ((product.productID === Number(id)) ? { ...product, ...productInfo } : product));
            resolve({
                message: 'Records updated.'
            });
        }, 1000);
    })
}

function deleteProduct(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            products = products.filter((product) => (product.productID !== Number(id)));
            resolve({
                message: 'Record deleted.'
            });
        }, 1000);
    })
}

export default {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}