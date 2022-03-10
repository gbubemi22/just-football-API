const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser')



// database
const connectDB = require('./DB/connect');




//ROUTES
const leaguesRouter = require('./routes/leagues')
const teamsRouter = require('./routes/teams')
const playersRouter = require('./routes/players')

//errorHandlerMiddleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');




app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECT))
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



//
app.use('/api/leagues', leaguesRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/players', playersRouter);

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