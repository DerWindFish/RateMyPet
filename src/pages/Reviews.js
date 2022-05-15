import ReviewDetails from "../components/ReviewDetails"
import { AddReview, GetReviews, DeleteReview } from "../services/PetServices"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router"

const Reviews = () => {

    let {id} = useParams()

    let navigate = useNavigate()

    const [reviews, setReviews] = useState([])
    const [formValues, setFormValues] = useState({ 
        name: '', 
        review: ''
    })
    const [targeted, setTargeted] = useState(false)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await AddReview({
            name: formValues.name,
            review: formValues.review
        })

        setFormValues({
            name: '',
            review: ''
        })
        navigate('/reviews')
        console.log('I submitted')


    }

    useEffect(() => {
        const getReviews = async () => {
          const data = await GetReviews()
          console.log(data)
          setReviews(data)
        }
        getReviews()
      }, [])

    const deleteReview = async (review) => {
        // e.preventDefault()
        await DeleteReview(review.id)
    }

    return(
        <div>
            <h1>User Reviews:</h1>
        {reviews.map((review) => {
            return(
                <div key={reviews.id}>
                    <h3>{review.name} writes:</h3>
                    <p>"{review.review}"</p>
                    <button>Update Review</button>
                    <button onClick={() => 
                    {deleteReview(review)}}>Delete Review</button>
                </div>
            )
            })}
            <form className="col" onSubmit={handleSubmit}>
                <h4>Add A Review:</h4>
                <label htmlFor="Image_Url">Name: </label>
                <input 
                    onChange={handleChange}
                    type='text'
                    name='name'
                    value={formValues.name}
                    required
                />
                <span></span>
                <br></br>
                <label htmlFor="Image_Url">Review: </label>
                <input 
                    onChange={handleChange}
                    type= 'text'
                    name='review'
                    value={formValues.review}
                    required
                />
                <br />
                <button disabled={!formValues.name || !formValues.review} className='button-button-button-2'>Add Pet</button>
            </form>
        
        </div>
    )
}

export default Reviews