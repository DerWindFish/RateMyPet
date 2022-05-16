import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { UpdateReview } from "../services/PetServices";

const UpdatingReview = () => {

    let navigate = useNavigate()

    let {review_id} = useParams()
    review_id = parseInt(review_id)

    const [formValues, setFormValues] = useState({
        name: '',
        review: ''
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await UpdateReview(review_id, {
            name: formValues.name,
            review: formValues.review
        })
        navigate('/reviews')
    }

    return(

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
                <button disabled={!formValues.name || !formValues.review} className='button-button-button2'>Update Review</button>
            </form>
        
    )

}

export default UpdatingReview