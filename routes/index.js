import express from 'express';
import content from './content';

const router = express.Router();

router.use('/content', content);

export default router;
