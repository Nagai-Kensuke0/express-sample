import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import logger from "morgan";
import createError from "http-errors";

const app = express();

app.use(logger('dev')); // logのmiddleware、response statusごとに色分けする
app.use(express.json());  // JSONをパースするミドルウェア

const router = express.Router();
routes(router)
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 3000
app.listen(port, () => {
  console.log(`Start on port ${port}.`)
})

module.exports = app;