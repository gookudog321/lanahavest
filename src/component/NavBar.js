import React,  {useState, useEffect} from 'react'
import logo from '../img/logo/lannaharvest.png'
import {Link} from 'react-router-dom'



function NavBar(){
    
     // state={
    //     isOpen:false
    // }
    // handletoggle = () =>{
    //     this.setState({isOpen:!this.state.isOpen})
    //     console.log(this.state.isOpen)
    // }

    const [click , setClick] = useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false)

    return (
        <nav className=
        "nav-grid"
        // {flex ? 'nav-grid nav-flex' : 'nav-grid'}
        >
                <div className="nav-logo"> 
                
                    <Link to="/"><img src={logo} className="logo"/></Link>
                    {/* <button className ="btn btn-primary">humbager</button> */}
                    <div className="menu-icon" onClick={handleClick} >
                    <ion-icon   name={click ? 'close-outline' : 'reorder-three-outline' }></ion-icon>
                    </div>
                </div>
                <ul  className={click ? 'nav-list active' : 'nav-list' }>
                    <li><Link onClick={closeMobileMenu}  to="/">Home</Link></li>
                    <li><Link onClick={closeMobileMenu}  to="/company">Company</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/buisness">Buisness</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/product">Product</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/fruit">Fruit Sense</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/community">Community</Link></li>
                </ul>
        </nav>
        )
}
export default NavBar



