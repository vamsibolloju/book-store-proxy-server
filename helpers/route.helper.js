module.exports.ceateRouteObject = ( method, path, handler ) => ({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method,
    path,
    handler
});
