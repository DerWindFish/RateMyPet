import PetDetail from "../components/PetDetail";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { AddPets } from '../services/PetServices'

const Pets = ({pet, user, userRating, rating, authenticated }) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ 
        image_url: '', 
        rating: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await AddPets({
            image_url: formValues.image_url,
            rating: formValues.rating
        })

        setFormValues({
            image_url: '',
            rating: ''
        })
        navigate('/ratethepets')
        console.log('I submitted')


    }

    return(user && authenticated) ? (
        <div className="browse-container">
            <h3>WeRatePets</h3>
            <div className="pet-grid">
            {pet.map((pets) =>(
                <PetDetail 
                    pets={pets}
                    key={pets.id}
                    image_url={pets.image_url}
                    rating={pets.rating}
                    ratings={pets.ratings}
                />
            ))}
            <form className="col" onSubmit={handleSubmit}>
                <h4>Add A Pet:</h4>
                <label htmlFor="Image_Url">Image_Url: </label>
                <input 
                    onChange={handleChange}
                    type='text'
                    name='image_url'
                    value={formValues.image_url}
                    required
                />
                <span></span>
                <br></br>
                <label htmlFor="Image_Url">Rating: </label>
                <input 
                    onChange={handleChange}
                    type= 'text'
                    name='rating'
                    value={formValues.rating}
                    required
                />
                <br />
                <button disabled={!formValues.image_url || !formValues.rating} className='button-button-button-2'>Add Pet</button>
            </form>
            
            </div>
        </div>
    ) : (
        <div className="you-cant-be-here">
            <h2 onClick={() => navigate('/login')}>Sorry you need to login to continue</h2>
        </div>
    )

}

export default Pets