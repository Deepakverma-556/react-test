import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GRID_LIST } from '../utils/helper';


const Production = () => {
    return (
        <div className='bg-dark-purple min-vh-100 d-flex align-items-center pt-3'>
            <div className='container custom-container  '>
                <div className='d-flex flex-xl-row gap-3 flex-column '>
                    <div className='bg-light-purple text-white py-3 px-26 xl-max-w-437 rounded-3 '>
                        <h1 className='m-0 pb-50 pb-8 fw-semibold lh-60 text-3xl'>Product</h1>
                        <p className='fs-6 lh-base'>Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022.</p>
                        <p className='fs-6 lh-base py-2'>With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital.</p>
                        <p className='fs-6 lh-base pb-2'>Once we establish the ourself in the UK, we plan to expand into other territories to take advantage of the £500 billion global market</p>
                        <p className='fs-6 lh-base'>We have highlighted some of our key features that will be the cornerstone of our product launch in April 23.</p>
                    </div>
                    <div className='bg-light-purple px-26 d-flex align-items-center justify-content-center py-3 rounded-3 '>
                        <div className='grid-container'>
                            {GRID_LIST.map((obj, i) => (
                                <div key={i} className={`${obj.myClass}`}>
                                    <img src={obj.image} alt={obj.imageAlt} className='h-128' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Production