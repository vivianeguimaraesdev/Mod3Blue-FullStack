const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {
    mongoose.connect(`${url}/${data}`, {
            user: user,
            pass: pass,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB Conected'))
        .catch((err) => console.log('Erro no Mongo', err))
};

module.exports = Conn;