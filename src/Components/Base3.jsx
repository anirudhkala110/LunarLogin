import React from 'react'
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';
import adidas from '../Assets/Logos/adidas.png'
import apple from '../Assets/Logos/apple.jpg'
import f1s from '../Assets/Logos/f1s.svg'
import gta from '../Assets/Logos/gta.png'
import './Base.css'

const Base3 = () => {
    return (
        <div className=' py-5 mb-2 px-0'>
            <div className='container py-5'>
                <div className='d-flex justify-between'>
                    <button className='btn fs-1 fw-bold'>Our Work</button>
                    {/* <button className='btn btn-outline-dark rounded-0 py-0'>VIEW ALL CASE-STUDIES &nbsp;&nbsp; <i className='bi bi-arrow-right'></i></button> */}
                </div>
                <div className='fw-semibold'>
                    Discover how Lunar Logic has transformed brands like yours. From sparkling startups to established enterprises, our portfolio showcases a variety of successful projects. See the creative solutions and innovative strategies that have made our clients shine brighter than the stars.
                </div>
                <div className='row my-3 py-3'>
                    <div className='col-sm-12 shadow col-md-4 p-2'>
                        <div className=''>
                            <img className='rounded-2' src={pic2} style={{ minWidth: '200px', minHeight: "150px", height: '20vh', width: '100%' }} />
                            <div className='m-2'>
                                <img src={gta} className='my-1' style={{ width: 'auto', height: '30px' }} />
                                <hr />
                                <b>Strategic Planning and Innovative channel expansion boosted Domino’s revenue by optimizing Customer Acquisition and Retention</b>
                                <p>* Icrease User Experience</p>
                                <p>* UI Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 shadow col-md-4 p-2'>
                        <div className=''>
                            <img className='rounded-2' src={pic1} style={{ minWidth: '200px', minHeight: "150px", height: '20vh', width: '100%' }} />

                            <div className='m-2'>
                                <img src={f1s} className='my-1' style={{ width: 'auto', height: '30px' }} />
                                <hr />
                                <b>Tech Driven Marketing boosts ROI through Precise Targeting, and Data-driven Decision-making.</b>
                                <p>* Icrease User Experience</p>
                                <p>* UI Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 shadow col-md-4 p-2'>
                        <div className=''>
                            <img className='rounded-2' src={pic3} style={{ minWidth: '200px', minHeight: "150px", height: '20vh', width: '100%' }} />

                            <div className='m-2'>
                                <img src={adidas} className='my-1' style={{ width: 'auto', height: '30px' }} />
                                <hr />
                                <b>Driving Business Growth Through Strategic Brand Uplift</b>
                                <p>* Icrease User Experience</p>
                                <p>* UI Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base3