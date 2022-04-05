import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/card'

function AboutPage() {
  return (
    <Card>
        <h1>About</h1>
        <p>this is crud app in react</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to='/'>back to home</Link>
        </p>
    </Card>
  )
}

export default AboutPage