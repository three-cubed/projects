if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config({ path: './.env' })
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const favicon = require('serve-favicon');

app.set('view engine', 'ejs');
app.use(favicon('./favicon.png'));
app.use(express.static('pics'));

app.get('/', (req, res) => {
        res.render('projects', {
                nameComment: process.env.nameComment,
                contactComment: process.env.contactMe,
        });
});

app.get('/nameblind', (req, res) => {
        res.render('projects', {
                nameComment: '',
                contactComment: process.env.noContact,
        });
});

app.listen(PORT);
console.log('listening to port: ' + PORT);
