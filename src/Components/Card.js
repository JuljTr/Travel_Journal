export default function card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imageUrl} alt=";ocation" />
            </div>
            <div className="card-info">
                <div className="location-info">
                    <span className="icon"></span>
                    <h5>{props.location} </h5>
                    <p>{props.googleMapsUrl} </p>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="dates">{props.startDate}{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}