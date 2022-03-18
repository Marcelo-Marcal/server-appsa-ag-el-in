import { NextFunction, Request, Response } from "express";

function authentication(req: Request, res: Response, next: NextFunction) {
  const authheader = req.headers.authorization;
  // console.log(req.headers);

  if (!authheader) {
    return res.status(401).json({ "message": "unauthorized" })
  }

  const auth = Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
  const username = auth[0];
  const password = auth[1];

  if (username == 'dWtT!fdQ%Ya&' && password == '!sS6P1&7YS4TxX82wI%tOu*PV7hj') {

    next();
  } else {
    return res.status(401).json({ "message": "unauthorized" })
  }
}

export { authentication }