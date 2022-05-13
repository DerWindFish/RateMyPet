import PetDetail from "../components/PetDetail";
import { useNavigate } from "react-router-dom"

const Pets = ({pet, user, userRating, rating, authenticated }) => {

    let navigate = useNavigate()

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
                />
            ))}
            </div>
        </div>
    ) : (
        <div className="you-cant-be-here">
            <h2 onClick={() => navigate('/login')}>Sorry you need to login to continue</h2>
        </div>
    )

}

export default Pets