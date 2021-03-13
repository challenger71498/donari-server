import {NextFunction, Request, Response, Router} from 'express';
import bodyParser from "body-parser";


const router = Router();
router.use(bodyParser.json(), async (err: any, req: Request, res: Response, next: NextFunction ) => {
    throw new Error();
});

router.use('/')

export default router;
