import React from 'react'

function Hero({heroName}) {

    if(heroName === 'joker')
      throw new Error('joker is not a hero')
  return (
    <div>{heroName}</div>
  )
}

export default Hero