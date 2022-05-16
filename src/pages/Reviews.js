import { AddReview, GetReviews, DeleteReview} from "../services/PetServices"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router"

const Reviews = () => {

    let {review_id} = useParams()
    review_id = parseInt(review_id)

    let navigate = useNavigate()

    const [reviews, setReviews] = useState([])
    const [formValues, setFormValues] = useState({ 
        name: '', 
        review: ''
    })

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
        await DeleteReview(review.id)
    }

    const editReview = async (review_id) => {
        // await UpdateReview()
        navigate(`/updatingreview/${review_id}`)
    }

    return(
        <div className="review">
            <h1 className="review-h1">User Reviews:</h1>
        {reviews.map((review) => {
            return(
                <div className="reviews-reviews" key={reviews.id}>
                    <h3>{review.name} writes:</h3>
                    <p>"{review.review}"</p>
                    <button className="button-button-button2" onClick={() => 
                        {editReview()}}>Update Review</button>
                    <button className="button-button-button2" onClick={() => 
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
                <button disabled={!formValues.name || !formValues.review} className='button-button-button2'>Add Review</button>
            </form>
        
        </div>
    )
}

export default Reviews