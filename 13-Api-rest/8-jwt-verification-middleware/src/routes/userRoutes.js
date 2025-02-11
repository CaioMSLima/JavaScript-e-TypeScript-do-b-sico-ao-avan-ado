import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', UserController.store);
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
index -> list all user -> GET
store/create -> create new user -> POST
delete -> delet the user -> DELETE
show -> show the user -> GET
update -> update the user -> PATCH or PUT
*/
