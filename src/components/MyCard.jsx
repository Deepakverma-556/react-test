import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CARD_LIST } from '../utils/helper'

const MyCard = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState()
    const clickHandler = (i) => {
        const formattedDomain = i.replace(/\s+/g, '-');
        navigate(`?value=${formattedDomain}`)
        setOpen(i)
    }
    return (
        <div className='d-flex py-4 px-4 gap-3'>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    {CARD_LIST.map((obj, i) => (
                        <div key={i} className=' col-12 col-md-6 col-lg-4 px-3 pt-3'>
                            <div onClick={() => clickHandler(obj.title)} className='p-3 border border-black pe-auto'>
                                <h2 className='fw-semibold fs-5'>{obj.title}</h2>
                                <p>{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MyCard