import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Button({children, className, ...props}: ButtonProps) {
  return (
    <button type="button" className='w-full bg-navy text-accent text-md py-2 rounded-sm hover:opacity-90' {...props}>{children}</button>
  )
}
