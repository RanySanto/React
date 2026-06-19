export default function Contact(props){
    return (
        <article className="contact-card">
                <img 
                    src={props.img}
                    alt="" 
                    className="portrait"
                />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src="/src/images/telephone.png" 
                    alt="" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src="/src/images/email.png" 
                    alt="" 
                />
                <p>{props.email}</p>
            </div>

        </article>
    )
}