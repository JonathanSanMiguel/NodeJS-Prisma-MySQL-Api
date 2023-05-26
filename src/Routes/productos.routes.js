import { Router } from 'express';
import { PrismaClient } from '@prisma/client';


const router = Router()
const prisma = new PrismaClient()


router.get('/products', async(request, response) => {
    try {

        const allRegisters = await prisma.productos.findMany()

        response.status(200).json(
            allRegisters
        )

    } catch (error) {
        response.status(500).json(
            'Server error'
        )
    }
})


export default router