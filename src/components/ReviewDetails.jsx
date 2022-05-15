const ReviewDetails = ({banana}) => {
    return(
        <div>
        <h3>{banana.name} writes:</h3>
        <p>"{banana.review}"</p>
        </div>
    )
}

export default ReviewDetails