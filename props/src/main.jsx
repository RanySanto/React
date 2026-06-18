import { createRoot } from 'react-dom/client'

import ReactDom from 'react-dom/client'

function App(){
  let time = ''
  const hours = 20
  if (hours < 12) {
    time = 'morning'
  }
  else if  (hours > 12 && hours < 19) {
    time = 'good afternoon'
  }
  else if  (hours > 19 && hours < 24) {
    time = 'good  night'
  }

  return (
    <h1>It is currently {time}</h1>
  )
}


ReactDom.createRoot(document.getElementById('root')).render(<App/>);
