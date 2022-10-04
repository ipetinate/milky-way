import './Navbar.style.css'

export function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>Logo</div>
      <div className='navbar__center'>Center</div>
      <div className='navbar__right'>Actions</div>
    </nav>
  )
}
