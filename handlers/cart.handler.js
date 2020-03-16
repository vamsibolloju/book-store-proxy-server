let cart = [];

module.exports = {
    getCart : (req, h) => {
        return cart;
    }, 
    addBookToCart: (req, h) => {
        const cartItem = req.payload;
        cart.push(cartItem);
        return { res : 'success' };
    },
    updateCartItem: (req, h) => {
        cart = cart.map( item => (item.id === req.payload.id) ? 
         ({ ...item, ...req.payload.changes }) : item )
        return { result: "Updated successfully" };
    },
    clearCart: (req, h) => {
        if(req.query.id){
            cart = cart.filter(item => item.book.id !== req.query.id)
        }else{
            cart = [];
        }
        return { result : "Item(s) cleared" }
    }
}