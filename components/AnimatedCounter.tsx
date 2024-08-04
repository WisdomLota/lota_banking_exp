'use client';

import CountUp from 'react-countup';
const AnimatedCounter = ({ amount }: { amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        end={amount}
        duration={1.5}
        prefix='$' 
        decimals={2}
        decimal='.'
        />
    </div>
  )
}

export default AnimatedCounter