const bookRouter = require('../routes/book')
const exp = require('express'); 
const app = exp();

app.use('/book', bookRouter);

app.listen(5000, () => console.log('Server Started...'));