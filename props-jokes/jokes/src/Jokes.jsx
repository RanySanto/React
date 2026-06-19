export default function Jokes(props){
    let rating = ''
    if (props.isPun) {
        rating = 'Good Joke'
    } else {
        rating = 'Bad Joke'
    }
    return (
        <main>
            {/* style={{display: props.setup ? "block" : "none"}} */}
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
            <ul>
                <li><p>Comments: {props.comments}</p></li>
            </ul>
            <p>{rating}</p>
            <hr />
        </main>
        
    )
};