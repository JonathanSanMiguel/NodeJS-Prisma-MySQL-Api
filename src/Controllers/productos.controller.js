import { prisma } from '../PrismaConnection.js';


export const getAllProducts = async(request, response) => {
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
}


export const postNewProduct = async(request, response) => {
    try {
        const {
            nombre,
            descripcion,
            peso,
            marca,
            estado,
            cantidad
        } = request.body

        const newProduct = await prisma.productos.create({
            data: request.body
        })

        response.status(200).json({
            newProduct
        })

    } catch (error) {
        response.status(500).json(
            error
        )
    }
}