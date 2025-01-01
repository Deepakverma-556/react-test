import React, { useState, useEffect } from 'react'

const MyFunctions = () => {
    const [myNumber, setMyNumber] = useState(0)
    const [count, setCount] = useState(0)
    const [addNumber, setAddNumber] = useState(9)

    useEffect(() => {
        if (count < 100) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [count]);

    useEffect(() => {
        for (let i = 9; i >= 0; i--) {
            setTimeout(() => {
                setAddNumber(i)
            }, (9 - i) * 1000)
        }
    }, [])
    return (
        <div className='p-5 d-flex flex-column align-items-center justify-content-center'>
            <div className='text-center'>
                <h2 className='text-center'>On click increment and decrement</h2>
                <button className='p-2 me-3' onClick={() => setMyNumber(myNumber + 1)}>Increment</button>
                <button className='p-2' onClick={() => setMyNumber(myNumber - 1)}>decrement</button>
                <p className='text-center pt-3'>{myNumber}</p>
            </div>
            <div className='pt-4'>
                <h2 className='text-center'>Counter</h2>
                <p className='text-center'>{count}</p>
            </div>
            <div className='pt-4'>
                <h2 className='text-center'>For loop reverse counter</h2>
                <p className='text-center'>{addNumber}</p>
            </div>
        </div>
    )
}

export default MyFunctions