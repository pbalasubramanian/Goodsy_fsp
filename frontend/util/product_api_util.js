export const fetchProducts = () => (
    $.ajax({
        method: "GET",
        url: "api/products"
    })
);

export const fetchProduct = (id) => (
    $.ajax({
        method: "GET",
        url: `api/products/${id}`
    })
);

export const createProduct = (product) => (
    $.ajax({
        method: "POST",
        url: "api/products",
        data: product,
        contentType: false,
        processData: false
    })
);

export const updateProduct = (product, productId) => (
    $.ajax({
        method: "PATCH",
        url: `api/products/${productId}`,
        data: product,
        contentType: false,
        processData: false
    })
);

export const deleteProduct = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/products/${id}`,
    })
);

export const productSearch = (title) => {
    return $.ajax({
        method: 'GET',
        url: 'api/search',
        data: { search: { title } }
    })
};