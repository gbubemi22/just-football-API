
require('dotenv').config();
const morgan = require('morgan');


//rest of the packages
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');




// database
const connectDB = require('./DB/connect');




//ROUTES
const leaguesRouter = require('./routes/leagueRoutes')
const teamsRouter = require('./routes/teamsRoutes')
const playersRouter = require('./routes/playersRoutes')





app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECT))
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



//
app.use('/api/leagues', leaguesRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/players', playersRouter);



//errorHandlerMiddleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

//port
const port = process.env.PORT || 5500;

const start = async () => {
 try {
     await connectDB(process.env.MONGO_URI);
    app.listen(port, ()=>{
        console.log(`listing on port ${port}...`)
    }) 
 } catch (error) {
     console.log(error)
 }   
};

start();