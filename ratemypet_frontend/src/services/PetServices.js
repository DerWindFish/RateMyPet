import Client from './api'

export const GetPets = async () => {
  try {
    const res = await Client.get('/pets')
    return res.data
  } catch (error) {
    throw error
  }
}