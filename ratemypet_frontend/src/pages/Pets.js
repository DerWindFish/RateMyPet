import PetDetail from "../components/PetDetail";

const Pets = () => {
    return(
        <div className="browse-container">
            <h3>Them Pets</h3>
            <div className="pet-grid">
                <PetDetail />
            </div>
        </div>
    )
}
export default Pets