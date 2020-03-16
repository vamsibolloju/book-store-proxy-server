let collection = [];

module.exports = {
    getCollection : (req, h) => {
        return collection;
    }, 
    addBookToCollection: (req, h) => {
        collection = [ ...collection, ...req.payload ]
        return { result : "success" };
    }
}