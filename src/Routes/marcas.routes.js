import { Router } from 'express';

const router = Router()


router.get('/categories', (request, response) => {
    response.send('categories')
})


export default router