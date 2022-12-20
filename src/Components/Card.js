import locationIcon from '../icon/location.png'
export default function card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="location" className="card-image" />
            <div className="card-info">
                <div className="location-info">
                    <span className="icon"><img src={locationIcon} alt='location-icon'/></span>
                    <h5 className="country">{props.location} </h5>
                    <span className="link"><a href={props.googleMap}>View on Google Maps</a></span>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="dates">{props.startDate}-{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}