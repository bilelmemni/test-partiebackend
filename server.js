const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

require('dotenv').config();
require('./config/connect');
require('./midllwere/passort');


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/image', express.static('./uploads'));
app.use('/file', express.static('./uploadfile'));

app.get('/', async (req, res) => {
    res.json({ message: 'REST API' });
});

app.use('/api', require('./routers/auth'));
app.use('/api', require('./routers/user'));
app.use('/api', require('./routers/categorie'));
app.use('/api', require('./routers/livre'));
app.use('/api', require('./routers/commande'));




app.listen(3000, () => {
    console.log('server work !!');
})