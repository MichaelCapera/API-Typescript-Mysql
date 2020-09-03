import {Router} from 'express'

const router =  Router();

import {indexwelcome} from '../controllers/index.controller'

router.route('/')
    .get(indexwelcome) 

export default router;