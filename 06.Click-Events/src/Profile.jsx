
function Profile() {
    const imageUrl = './src/assets/profile.png'

    const handleClick = (e) => { e.target.style.display = "none" }
    return (
        <>
            <img className="profile-img" src={imageUrl} onDoubleClick={(e) => { handleClick(e) }} />
        </>
    )
}

export default Profile