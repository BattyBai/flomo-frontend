import React, { useState } from 'react'


const Footer = () => {

  return (
      <footer>
      <div id="names-container">
        <div id="Joy">
          <h4 className="footer-text">Joy Houser</h4>
          <div className="icon-container">
          <a href="#" target="blank" className="footer-text"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/joynormahouser/" target="blank" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" className="footer-text" target="blank"><i class="fa-solid fa-laptop-code"></i></a>
          </div>
        </div>
        <div id="Isaac">
          <h4 className="footer-text">Isaac Pure</h4>
          <div className="icon-container">
            <a href="https://github.com/BattyBai" target="blank" className="footer-text"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/isaacpure/" target="blank" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" target="blank" className="footer-text"><i class="fa-solid fa-laptop-code"></i></a>
          </div>
        </div>
        <div id="Liat">
          <h4 className="footer-text">Liat Paradise</h4>
          <div className="icon-container">
            <a href="https://github.com/Liat-Kelila" target="blank" className="footer-text"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/liatparadise/" target="blank" className="footer-text"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://soundcloud.com/liat-paradise" target="blank" className="footer-text"><i class="fa-solid fa-music"></i></a>
          </div>
        </div>
      </div>
      <div id="footer-title">
        <h6 className="footer-text">Created © September 2022</h6>
      </div>
      </footer>
  )
}


export default Footer
