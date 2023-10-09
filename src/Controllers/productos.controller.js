import { prisma } from '../PrismaConnection.js';


export const getAllProducts = async(request, response) => {
  try {
    const allRegisters = await prisma.productos.findMany({
      include: {
        marca: true
      }
    })

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
      },
      include: {
        marca: true
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
    const {
      nombre,
      descripcion,
      peso,
      marcaId,
      estado,
      cantidad
    } = request.body

    //const newProduct = await prisma.productos.create({data: request.body})
    await prisma.productos.create({
      data: {
        Nombre: nombre,
        Descripcion: descripcion,
        Peso: peso,
        MarcaId: marcaId,
        Estado: estado,
        Cantidad: cantidad
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


export const updateAProduct = async(request, response) => {
  try {
    const {
      nombre,
      descripcion,
      peso,
      marcaId,
      estado,
      cantidad
    } = request.body


    await prisma.productos.update({
      where: {
        Id: parseInt(request.params.id)
      },
      data: {
        Nombre: nombre,
        Descripcion: descripcion,
        Peso: peso,
        MarcaId: marcaId,
        Estado: estado,
        Cantidad: cantidad
      }
    })

    response.status(200).send(
      'Registro Actualizado Satisfactoriamente'
    )

  } catch (error) {
    response.status(500).send(
      'Something Goes Wrong...'
    )
  }
}


export const deleteProduct = async(request, response) => {
  try {
    const productFound = await prisma.productos.delete({
      where: {
        Id: parseInt(request.params.id)
      }
    })

    if(!productFound) return response.status(404).send('Product Not Found')

    response.status(200).send(
      'Registro Eliminado Satisfactoriamente'
    )

  } catch (error) {
    response.status(500).send(
      'Something Goes Wrong'
    )
  }
}