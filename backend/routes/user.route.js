import express from 'express';

const router = express.Router ();

import {
  register,
  login,
  logout,
  getProfile,
} from '../controllers/user.controller.js';

router.route ('/register').post (register);
router.route ('/login').post (login);
router.route ('/logout').post (logout);
router.route ('/profile').get (getProfile);
export default router;
