export default function card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="location" className="card-image" />
            <div className="card-info">
                <div className="location-info">
                    <span className="icon"></span>
                    <h5 className="country">{props.location} </h5>
                    <p><a href={props.googleMap}>View on Google Maps</a></p>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="dates">{props.startDate}{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}