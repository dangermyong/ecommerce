import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/index'

const isActive = (history, path) => {
  if(history.location.pathname === path) {
    return {color: '#ff9900'}
  } else {
    return {color: '#ffffff'}
  }
}

function Menu({ history }) {
  return (
    <div>
      <ul className='nav nav-tabs bg-primary'>
        <li className="nav-item">
          <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
          <Link className='nav-link' style={isActive(history, '/user/dashboard')} to='/user/dashboard'>Dashboard</Link>
        </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
          <Link className='nav-link' style={isActive(history, '/admin/dashboard')} to='/admin/dashboard'>Dashboard</Link>
        </li>
        )}
        
        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>Sign up</Link>
            </li>
          </>
        )}
        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <span className='nav-link' style={{cursor: 'pointer', color: '#ffffff'}} onClick={() => signout(() => {
                history.push('/')
              })}>Sign out</span>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default withRouter(Menu)



