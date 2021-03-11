import { Router } from 'express';

import { validateVotation } from '../middlewares/middlewareVotationValidation';

import VotationController from '../controllers/VotationController';

const router = Router();

router.post('/votation', VotationController.addVotation);

//router.get('/votation', validateVotation, VotationController.getVotation);

export default router;
