import Client from './api'

export const GetPets = async () => {
  try {
    const res = await Client.get('/api/pets')
    // console.log(res.data)
    return res.data
    
  } catch (error) {
    throw error
  }
}

export const AddPets = async (data) => {
  try {
    const res = await Client.post('/api/pets', data)
    console.log(res.data)
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

// Going to add back in later

// export const GetRatings = async (data) => {
//   try {
//     const res = await Client.get(`/api/ratings`)
//     console.log(res.data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const GetReviews = async () => {
  try {
    const res = await Client.get(`/api/reviews`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (data) => {
  try {
    const res = await Client.post(`/api/reviews`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateReview = async (data) => {
  try {
    const res = await Client.put(`/api/reviews/${data.id}`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async (review_id) => {
  try {
    console.log(review_id)
    const res = await Client.delete(`/api/reviews/${review_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}