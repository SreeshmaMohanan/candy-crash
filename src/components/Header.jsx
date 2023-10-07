import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import ScoreBoard from './ScoreBoard'
function Header() {
  return (
    <div>
        <Navbar className="bg-dark d-flex">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.gifservice.fr/img/gif-vignette-small/bb5954803bcd8fb36808c8ca18af39ad/76434-multi-media-video-games-candy-crush-logo-icons.gif"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header