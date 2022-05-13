import Client from './api'

export const GetPets = async () => {
  try {
    const res = await Client.get('/api/pets')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (data) => {
  try {
    const res = await Client.get(`/api/users/${data}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserRating = async (data) => {
  try {
    const res = await Client.get(`/api/userratings`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRatings = async (data) => {
  try {
    const res = await Client.get(`/api/ratings`)
    return res.data
  } catch (error) {
    throw error
  }
}