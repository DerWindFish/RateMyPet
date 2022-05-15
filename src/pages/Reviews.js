import ReviewDetails from "../components/ReviewDetails"
import { GetReviews } from "../services/PetServices"
import { useState, useEffect } from "react"

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
          const data = await GetReviews()
          setReviews(data)
        }
        getReviews()
      }, [])

    return(
        <div>
        {reviews.map((banana) =>(
            <ReviewDetails 
                banana={banana}
                key={banana.id}
                name={banana.name}
                review={banana.review}
            />
        ))}
        
        </div>
    )
}

export default Reviews