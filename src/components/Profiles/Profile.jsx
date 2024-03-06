import "./Profile.css"

export const Profile = () => {
    //I will need to useParams to get the userId , this may require created a User component 
    return (
        <div className="profile-container">
            <div className="profile-body">
                <div className="profile-item">Full Name:</div>
                <div className="profile-item"> Cohort #:</div>
                <div className="profile-item">Posts Written: </div>
            </div>
            { //if the current user is looking at the profile with the matching profileId then this button will display >
            //the button will link to the Edit Profile view 
            <button className="profile-btn profile-item">Edit Profile</button>}
        </div>
    )
}