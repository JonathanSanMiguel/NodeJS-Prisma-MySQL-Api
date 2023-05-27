import { prisma } from '../PrismaConnection.js';


export const getAllProducts = async(request, response) => {
  try {

    const allRegisters = await prisma.productos.findMany()

    response.status(200).json(
      allRegisters
    )

  } catch (error) {
    // console.log(error)
    response.status(500).send(
      'Something Goes Wrong...'
    )
  }
}


export const getOneProduct = async(request, response) => {
  try {

    const productFound = await prisma.productos.findFirst({
      where: {
        Id: parseInt(request.params.id)
      }
    })

    if(!productFound) return response.status(404).send('Product Not Found')

    response.status(200).json({
      productFound
    })

  } catch (error) {
    response.status(500).send(
      'Something Goes Wrong'
    )
  }
}


export const postNewProduct = async(request, response) => {
  try {
    // Las constantes deben llamarse igual que el campo
    // de la base de datos.
    const {
      Nombre,
      Descripcion,
      Peso,
      MarcaId,
      Estado,
      Cantidad
    } = request.body

    //const newProduct = await prisma.productos.create({data: request.body})
    await prisma.productos.create({
      data: {
        Nombre,
        Descripcion,
        Peso,
        MarcaId,
        Estado,
        Cantidad
      }
    })

    response.status(200).send(
      'Registro Creado Satisfactoriamente'
    )
  } catch (error) {
    response.status(500).json(
      error
    )
  }
}