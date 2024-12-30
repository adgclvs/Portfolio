import React from 'react'
import Section from './Section'

const Hero = () => {
  return (
    <Section className='flex items-center pl-32 pt-16 mt-16'>
        <div className='pr-16'>
            <h1 className='text-4xl'>Hi, I'm Adrien</h1>
            <h3 className='max-w-96 break-words pl-8'>
                djsfhjkqshdfjkqhkfgjhqksjhfgsqhfjsqhfkjqhsjkdfhkqsjdhfqjhsdfjqsdhfkjhqsjkfhkjqshfkjqhskjfhkqjshdfkjqkjsdfhkjqhsdfjfhgkjddsqfqsdfqsdfqsdfsqdfqsdfqsfhgkjhdsfkjghskdjfhgkjsdhfgkjhsdkjgfhksdjfhgkjsjkfh
            </h3>
        </div>
        <div className='rounded-full overflow-hidden w-48 h-48'>
            <img src="/Lambo_noire.jpg" alt="Photo de profil" className='w-full h-full object-cover' />
        </div>
    </Section>
  )
}

export default Hero