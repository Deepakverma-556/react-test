import React from 'react'
import { COMPETITION_LIST } from '../utils/helper'

const Competition = () => {
    return (
        <div className='d-flex align-items-center justify-content-center bg-dark-purple py-5'>
            <div className='max-w-1177 container'>
                <div className='d-flex align-items-center flex-column flex-lg-row gap-78 gap-md-5 gap-4'>
                    <div className='text-white px-3 '>
                        <h1 className='m-0 pb-50 pb-8 fw-semibold lh-60 text-3xl'>Competition</h1>
                        <p className='fs-6 lh-base'>Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
                        <p className='fs-6 lh-base py-2'>This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
                        <p className='fs-6 lh-base pb-2'>The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
                        <p className='fs-6 lh-base'>As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.</p>
                    </div>
                    <div className='bg-dark-green px-3 py-5 rounded w-full'>
                        <div className='overflow-table'>
                            <table className='max-w-580 mx-auto table-custom'>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th className=" px-37 pt-27 pb-3 text-center bg-white table-heading rounded-top text-12 fw-sembold">Rift</th>
                                        <th className=" px-3 pt-27 pb-3 text-center bg-white table-heading rounded-top text-12 fw-sembold mx-7">Taxscout</th>
                                        <th className=" pt-27 pb-3 px-3 text-center bg-white table-heading rounded-top text-12 fw-sembold">Coconut</th>
                                        <th className=" px-37 pt-27 pb-3 text-center bg-dark-aqua table-heading rounded-top text-12 fw-sembold">Pie</th>
                                    </tr>
                                    {COMPETITION_LIST.map((obj, i) => (
                                        <tr key={i} className='border-top border-black'>
                                            <td className='py-18 pr-61 text-white text-sm fw-normal lh-sm border-top border-black'>{obj.service}</td>
                                            <td className={`py-18 px-26 text-xsm text-center bg-white border-top border-black ${i === 5 ? "rounded-bottom" : ""} `}>{obj.rift}</td>
                                            <td className={`py-18 px-3 text-xsm text-center bg-white mx-7 table-custom border-top border-black ${i === 5 ? "rounded-bottom" : ""}`}>{obj.taxscouts}</td>
                                            <td className={`py-18 px-3 text-xsm text-center bg-white border-top border-black ${i === 5 ? "rounded-bottom" : ""}`}>{obj.coconut}</td>
                                            <td className={`py-18 px-2 text-xsm text-center bg-dark-aqua mx-7 border-top border-black ${i === 5 ? "rounded-bottom" : ""}`}>{obj.pie}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competition