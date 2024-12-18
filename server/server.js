const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes")
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const { auth } = require('./middleware/authMiddleware');

//connect to database
connectDB();

//setup middlewares
app.use(express.json());//pass data from the backend
app.use(cookieParser());

//setup routes
app.use("/api/rooms",roomRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/users",userRoutes);
app.use("/auth",auth);

app.use(errorHandler);

app.listen(port, () =>console.log(`listening on port ${port}`));