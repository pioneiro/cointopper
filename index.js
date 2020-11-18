const port = process.env.PORT || 4192;

const express = require('express');

const index = express();

index.use(express.static('assets'));

index.set('view engine', 'ejs');

index.get('/', function(req, res) {
    res.render('home');
})

index.listen(port, function() {
    console.log('server initiated at port', port);
});