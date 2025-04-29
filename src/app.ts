import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
// import router from "./app/routes";
// import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import HttpStatus from 'http-status';
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import router from "./app/routes";

const app: Application = express();



app.use(cors());
app.use(cookieParser())

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Welcome to Bike Servicing Management"
    })
})
// app.use('/api/v1/user', userRoutes)
// app.use('/api/v1/admin', adminRoutes)

app.use('/api', router)

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {

    res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: "api not found !",
        error: {
            path: req.originalUrl
        }
    })
})

export default app;