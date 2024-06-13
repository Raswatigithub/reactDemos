import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div><h1>Contact</h1>
    <h2>Mobile number:34565465</h2>
        <br></br>
        <table>
          <tr>
          <Link to="/salary">
          <button> Cal sal</button>
        </Link>
          </tr>
        </table>

    </div>

  )
}

export default Contact