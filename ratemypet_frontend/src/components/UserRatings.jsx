import { useState, useEffect } from "react"

const UserRatings = ({ userRatings }) => {
    return (
        <div>
            {userRatings.userrating}
            <button onClick={() => console.log(userRatings.id)}>Select</button>
        </div>
    )
}

export default UserRatings