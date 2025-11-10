
function Card(){
    return(
        <div className = "card">
            <img className = "card-image" src ="./picture.jpg" alt = "profile picture" height={400} width={400}></img>
            <h2 className = "card-title">Priyanka</h2>
            <p className = "card-text">I am learning react and play games</p>
        </div>
    );
}

export default Card;