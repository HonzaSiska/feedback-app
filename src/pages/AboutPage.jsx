import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <card style={{color: 'red'}}>
      <div className="about">
        <h1>About</h1>
        <p>THis is just about page</p>
        <Link to='/'>Home</Link>

      </div>
    </card>
  )
}

export default AboutPage