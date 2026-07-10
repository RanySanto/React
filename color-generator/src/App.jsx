import { useState, useEffect, use } from 'react'

function App() {
  const [color, setColor] = useState()
  
  
  useEffect(()=>{
  }, [])

  function handleClick(){
    const validCharacters = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"]
    let hexColor = ""
    for (let i = 0; i < 6; i++){
      hexColor += validCharacters[Math.floor(Math.random() * validCharacters.length)]
    }
    setColor(hexColor)
  }

  function changeColorFormat(){
    setColor((value)=>{value ? RGB : HEX ? HEX : RGB})
  }

  return (
    <div id='color-container' style={{backgroundColor:`#${color}`}}>
      <h2>HEX COLOR</h2>
      <h2>{`#${color}`}</h2>
      <button onClick={handleClick}>Random Color</button>
      {/* <button onClick={()=>{changeColorFormat()}}>RGB</button>
      <button onClick={()=>{changeColorFormat()}}>HEX</button> */}
    </div>
  )
}

export default App
