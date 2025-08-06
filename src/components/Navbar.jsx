import './Navbar.css'

const Navbar=()=>{
    return(
        <>
        <header>
        <div className="navbar">
  <div className="nav-logo border">
    <div className="logo" />
  </div>
  <div className="nav-address border">
    <p className="add-first">Deliver to</p>
    <div className="add-icon">
      <i className="fa-solid fa-location-dot" />
      <p className="add-second">India</p>
    </div>
  </div>
  <div className="nav-search">
    <select className="search-select">
      <option>All</option>
    </select>
    <input placeholder="Search Amazon" className="search-input" />
    <div className="search-icon">
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  </div>
  <div className="nav-signin border">
    <p>
      <span>Hello, sign in</span>
    </p>
    <p className="nav-second">Account &amp; Lists</p>
  </div>
  <div className="nav-return border">
    <p>
      <span>Returns</span>
    </p>
    <p className="nav-second">&amp; Orders</p>
  </div>
  <div className="nav-cart border">
    <i className="fa-solid fa-cart-shopping" />
    Cart
  </div>
</div>
<div className="panel">
  <div className="panel-all">
    <i className="fa-solid fa-bars" />
    All
  </div>
  <div className="panel-ops">
    <p className='border'>Fresh </p>
    <p className='border'>MX Player </p>
    <p className='border'>Sell</p>
    <p className='border'>Bestsellers</p>
    <p className='border'>Today's Deals</p>
    <p className='border'>Mobiles </p>
    <p style={{ marginRight: 0 }} className='border'>Prime </p>
    <select style={{ backgroundColor: "transparent", marginRight: 12 }} />
    <p className='border'>Customer Service</p>
    <p className='border'>New Release </p>
    <p className='border'>Fashion </p>
    <p className='border'>Amazon Pay</p>
    <p className='border'>Home &amp; Kitchen</p>
    <p className='border'>Computer</p>
    <p className='border'>Books</p>
    <p className='border'>Car &amp; Moterbike</p>
    <p />
  </div>
</div>

</header>


        </>
    )
}
export default Navbar;