import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <nav>
        <Link to={'/about'}>About</Link>
        <Link to={'/posts'}>Post</Link>
        <Link to={'/students'}>Students</Link>
        <Link to={'/pec'}>Pec</Link>
        <Link to={'/form'}>Form</Link>

      </nav>
  )
}

export default navBar