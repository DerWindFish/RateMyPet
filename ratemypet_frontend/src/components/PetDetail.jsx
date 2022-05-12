const PetDetail = ({pets}) => {
  return(
    <div className="pet-wrapper">
      <img src={pets.image_url} alt='pets' className="pet-image" />
      <br></br>
      {pets.rating}
    </div>
  )
}

export default PetDetail