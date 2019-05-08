export const createCart = (cart) => (
    $.ajax({
        method: 'post',
        url: 'api/carts',
        data: { cart }
    })
);