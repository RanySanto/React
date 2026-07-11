import { useState, useEffect } from 'react'

function App() {
  const [color, setColor] = useState()
  
  
  useEffect(()=>{
  }, [])

  function randomColorUtility(length){
    return Math.floor(Math.random() * length)
  }

  function handleClick(){
    const hex = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"]
    let hexColor = "#"
    for (let i = 0; i < 6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  function changeColorFormat(color){
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    
    // setColor(`rgb(${r},${g},${b})`)
    setColor(`rgb(${r},${g},${b})`)
  }

  return (
    <div id='color-container' style={{backgroundColor:`${color}`}}>
      <h2>HEX COLOR</h2>
      <h2>{`${color}`}</h2>
      <button onClick={handleClick}>Random Color</button>
      <button onClick={()=>{changeColorFormat(color)}}>RGB</button>
      <button onClick={()=>{handleClick()}}>HEX</button>
    </div>
  )
}

export default App
