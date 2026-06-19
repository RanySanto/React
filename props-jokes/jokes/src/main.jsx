import { createRoot } from 'react-dom/client'
import './index.css'
import Jokes from './Jokes'

createRoot(document.getElementById('root')).render(
  <>
    <Jokes
      setup='My wife told me to stop acting like a flamingo.'
      punchline='I had to put my foot down.'
      upvotes={3}
      downvotes={32}
      comments={[
        {author:"", text:"", title:""},
        {author:"", text:"", title:""},
      ]}
      isPun={false}
    />
    <Jokes
      punchline='A priest, a pastor, and a rabbi walk into a bar.The bartender says, “What is this, some kind of joke?”'
      upvotes={20}
      downvotes={3}
      isPun={true}
    />
    <Jokes
      setup='Why don’t chickens wear underwear?'
      punchline='Because their pecker is on their face.'
      upvotes={10}
      downvotes={5}
      isPun={true}
    />
    <Jokes
      setup='What’s green and has wheels?'
      punchline='Grass! I lied about the wheels.'
      upvotes={65}
      downvotes={10}
      isPun={true}
    />
    <Jokes
      setup='What’s the dumbest animal in the jungle?'
      punchline='A polar bear.'
      upvotes={60}
      downvotes={35}
      isPun={true}
    />
  </>
)
