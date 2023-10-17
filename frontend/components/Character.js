import React, {useState} from 'react'


function Character({ planets, person }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    setIsVisible(!isVisible);
  }
  let homeworld = planets.find(planet => planet.id === person.homeworld)
  return (
    <div className='character-card' onClick={clickHandler}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{person.name}</h3>
      {isVisible && <p className='character-planet'>Planet: {<span className='character-planet'>{homeworld.name}</span>}</p>}
    </div>
  )
}

export default Character
