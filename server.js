const Hapi = require('@hapi/hapi');
const routeHelper = require('./helpers/route.helper');
const booksHandler = require('./handlers/books.handler');
const cartHandler = require('./handlers/cart.handler');
const collectionHandler = require('./handlers/collection.handler');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(
        routeHelper.ceateRouteObject('GET', '/', (req, h) => {
            return 'Hello World!';
        })
    );


    // Books api
    server.route(
        routeHelper.ceateRouteObject('GET', '/books', booksHandler.getBooks),
    );

    server.route(
        routeHelper.ceateRouteObject('GET', '/books/{id}', booksHandler.getBook)
    );

    // Cart api
    server.route(
        routeHelper.ceateRouteObject('GET', '/cart', cartHandler.getCart)
    );

    server.route(
        routeHelper.ceateRouteObject('POST', '/cart', cartHandler.addBookToCart)
    );

    server.route(
        routeHelper.ceateRouteObject('PUT', '/cart', cartHandler.updateCartItem)
    );

    server.route(
        routeHelper.ceateRouteObject('DELETE', '/cart', cartHandler.clearCart)
    );


    // Collection api
    server.route(
        routeHelper.ceateRouteObject('GET', '/collection', collectionHandler.getCollection),
    );
    
    server.route(
        routeHelper.ceateRouteObject('POST', '/collection', collectionHandler.addBookToCollection)
    );


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
