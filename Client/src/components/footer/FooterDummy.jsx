import React from 'react'
import './Footer.css'
const FooterDummy = () => {
  return (
    <>
        <div className="footer-container">
            <div className="ul">
                <h5>Abstract</h5>
                
                <li>Branches</li>
                <li>Pricing</li>
                <li>Download</li>
                
            </div>
            <div className="ul">
                <h5>Resources</h5>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Release Notes</li>
                <li>Status</li>
            </div>
            <div className="ul">
                <h5>Community</h5>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Dribble</li>
                <li>Podcast</li>
            </div>
            <div className="ul">
                <h5>Company</h5>
                <li>About Us</li>
                <li>Careers</li>
                <li>Legal</li>
                <h6 className='mt-3'>Contact Us</h6>
                <li>info@abstract.com</li>
            </div>
            <div className="ul copy">
                <li><img  src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="Logo" /></li>
                <li className='mt-3'>&copy;Copyright 2022</li>
                <li>Abstract Studio Design, Inc.</li>
                <li>All rights reserved</li>
            
            </div>
        </div>
    </>
  )
}

export default FooterDummy