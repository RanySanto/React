export default function Entry(props){
    return (
        <article>
            <img src={props.img?.src} alt={props.img?.alt} className="local-image" />
            <div className="local-info">
                <div className="map">
                    <p><img src="/src/location-pin.png" alt="" className="location-icon"/> {props.country}</p><a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )

}

// img = {entry.img}
//                     title = {entry.title}
//                     country = {entry.country}
//                     googleMapsLink = {entry.googleMapsLink}
//                     dates = {entry.dates}
//                     text = {entry.text}