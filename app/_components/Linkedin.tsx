import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Linkedin = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='rounded-full overflow-hidden w-12 h-12'>
          <img src="/Lambo_noire.jpg" alt="Photo de profil" className='w-full h-full object-cover' />
      </div>
      <div className="pt-2">
        <Link href="https://www.linkedin.com/in/adrien-gonçalves/" className={cn(buttonVariants({variant: "secondary"}), "size-6 p-0")}>
          Connect
        </Link>
      </div>
    </div>
  )
}

export default Linkedin