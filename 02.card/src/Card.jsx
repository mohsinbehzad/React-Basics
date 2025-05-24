import ProfilePic from './assets/profile.png'

function Card() {
    return (
        <>
            <div className="card">
                <img className="card-image" src={ProfilePic} alt="profile pic" />
                <h2 className="card-title">Mohsin Behzad</h2>
                <p className="card-text">I am Computer Scince Student at Comsats Islamabad</p>
            </div>
        </>
    );
}

export default Card