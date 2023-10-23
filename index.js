// Require Statements
const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');

const routes = require('./routes');
const Rant = require('./models/Rant');

const mongoURL =
  'mongodb+srv://ronit_c:Fue5C7P5VUieBqHl@tourcamp.alpnh.mongodb.net/anonymous-org?retryWrites=true&w=majority';
const app = express();

// JSSON Parser and Headers
app.use(express.json());
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const filterRants = async (req, res, next) => {
  const rants = await Rant.find();
  const oldRants = rants.filter(r => r.date.getDate() > 0);
  for (const rant of oldRants) {
    await rant.remove();
  }
  next();
};

// ROUTES
app.use(filterRants);
app.use('/', routes);

// DB Setup
mongoose.Promise = Promise;
mongoose
  .connect(mongoURL, {
    keepAlive          : true,
    useNewUrlParser    : true,
    useUnifiedTopology : true,
  })
  .then(() =>
    app.listen(3000, () =>
      console.log(
        `connect to DB and started server at port 3000`
      )
    )
  )
  .catch(e => console.log(e));
