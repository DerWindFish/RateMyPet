// import { useContext } from "react"
// import { Context } from "./Context"

const UserRatings = ({ userRatings }) => {

    // const [add, isAdded] = useState(false)
    // const {selectRating} =useContext(Context)
    // const {setSelectRating} = useContext(Context)

    return (
        <div>
            {userRatings.userrating}
            {/* <button className='button2b button-2' onClick={() => {
                  setSelectRating([...selectRating, userRatings])
                  isAdded(true)
                  }}>Add to RatingList</button>  */}
        </div>
        
    )
}

export default UserRatings