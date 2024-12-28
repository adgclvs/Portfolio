import React from 'react'

const StackIcon = ({stack}: {stack: string}) => {
  return (
    <div className='bg-accent flex items-center p-1 rounded-md'>
        <img src={`/stacks/${stack.toLowerCase()}.png`} alt={stack} className="w-4 h-4 mr-2" />
        <h6 className='text-text-high'>{stack}</h6>
    </div>
  )
}

export default StackIcon