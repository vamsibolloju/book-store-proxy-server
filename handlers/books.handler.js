const Request = require('request-promise');
const books_url = 'https://www.googleapis.com/books/v1/volumes';

module.exports = {
    getBooks : async (req, h) => {
        const query = req.query.q;
        const res =  await Request(`${books_url}/?q=${query}`);
        return h.response(res).code(200);         
    },
    getBook: async (req, h) => {
        const id = req.params.id;
        try{
            const res = await Request(`${books_url}/${id}`);
            return h.response(res).code(200);    
        }catch(e){
            return h.response('Book not found').code(404);
        }
    }
}