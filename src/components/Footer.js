import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {

  return (
      <section>

      <div id="names-container">
        <div id="Joy">
          <h4 className="footer-text">Joy Houser</h4>
          <div className="icon-container">
          <a href="#" className="footer-text"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/joynormahouser/" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" className="footer-text"><i class="fa-solid fa-laptop-code"></i></a>
          </div>
        </div>

        <div id="Isaac">
          <h4 className="footer-text">Isaac Pure</h4>
          <div className="icon-container">
            <a href="https://github.com/BattyBai" className="footer-text"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/isaacpure/" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" className="footer-text"><i class="fa-solid fa-laptop-code"></i></a>
          </div>
        </div>

        <div id="Liat">
          <h4 className="footer-text">Liat Paradise</h4>
          <div className="icon-container">
            <a href="https://github.com/Liat-Kelila" className="footer-text"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/liatparadise/" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://soundcloud.com/liat-paradise" className="footer-text"><i class="fa-solid fa-music"></i></a>
          </div>
        </div>

      </div>
      <div id="footer-title">
        <h5 className="footer-text">Crafted in September, 2022</h5>
      </div>
      </section>
  )
}


export default Footer
