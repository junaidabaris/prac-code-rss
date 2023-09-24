import logo from "../../assets/images/logo.png"
function Header() {
    return <div className="header">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6"><a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="img-fluid" />
                        </a></div>
                    <div className="col-6">
                        <ul>
                            <li className="loginmenu"><a href="#" className="signin">Sign In</a></li>


                            {/* <li><a href="#" title="Sign In" className="navbar-brand">Sign In<i className="fa fa-sign-in fa-1x" aria-hidden="true"></i></a></li> */}
                        </ul>
                        {/* <ul>
                            <li><a href="#"><img src="images/cart.png" alt="cart" /></a></li>
                            <li><a href="#" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="images/account.png" alt="" className="me-1" /></a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">My Account</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="menubar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    {/* Nav Toggle Button
                    <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    Nav Links */}
                    <div className="collapse navbar-collapse justify-content-center lh-lg" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdowna" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdowna">
                                    <li><a href="category-list.html" className="nav-link">CUT VINYL <span>»
                                    </span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">APPLICATION TAPE</a></li>
                                            <li><a href="#" className="nav-link">CUT VINYL</a></li>
                                            <li><a href="#" className="nav-link">HEAT TRANSFER VINYL</a></li>
                                            <li><a href="#" className="nav-link">REFLECTIVE VINYL</a></li>
                                            <li><a href="#" className="nav-link">TRANSLUCENT VINYL</a></li>
                                            <li><a href="#" className="nav-link">VINYLEFX</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="category-list.html" className="nav-link">DIGITAL MEDIA <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">BACKLIT BANNER</a></li>
                                            <li><a href="#" className="nav-link">BANNER</a></li>
                                            <li><a href="#" className="nav-link">BANNER SUPPLIES</a></li>
                                            <li><a href="#" className="nav-link">CALENDERED LAMINATE</a></li>
                                            <li><a href="#" className="nav-link">CAST LAMINATE</a></li>
                                            <li><a href="#" className="nav-link">LIQUID LAMINATE</a></li>
                                            <li><a href="#" className="nav-link">MAGNETIC MEDIA</a></li>
                                            <li><a href="#" className="nav-link">PAPER</a></li>
                                            <li><a href="#" className="nav-link">SPECIALTY VINYL</a></li>
                                            <li><a href="#" className="nav-link">VINYL</a></li>
                                            <li><a href="#" className="nav-link">WINDOW PERF</a></li>
                                            <li><a href="#" className="nav-link">WINDOW TINT</a></li>
                                            <li><a href="#" className="nav-link">WRAP MEDIA</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="category-list.html" className="nav-link">ELECTRICAL SUPPLIES <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">CABLE TIES</a></li>
                                            <li><a href="#" className="nav-link">ELECTRICAL ACCESSORIES</a></li>
                                            <li><a href="#" className="nav-link">LED</a></li>
                                            <li><a href="#" className="nav-link">LED MESSAGE BOARD</a></li>
                                            <li><a href="#" className="nav-link">LED PRICE SIGN</a></li>
                                            <li><a href="#" className="nav-link">POWER SUPPLY & TRANSFORMERS</a></li>
                                            <li><a href="#" className="nav-link">RETRO FIT</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="category-list.html" className="nav-link">INK <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">INK CET </a></li>
                                            <li><a href="#" className="nav-link">INK LIQUECOLOR</a></li>
                                            <li><a href="#" className="nav-link">INK MARABU</a></li>
                                            <li><a href="#" className="nav-link">INK MUTOH</a></li>
                                            <li><a href="#" className="nav-link">INK MIMIAKI</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="category-list.html" className="nav-link">RIGID SUBSTANCE <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">ACM </a></li>
                                            <li><a href="#" className="nav-link">ACRYLIC</a></li>
                                            <li><a href="#" className="nav-link">ADHESIVE</a></li>
                                            <li><a href="#" className="nav-link">ALUMACORR</a></li>
                                            <li><a href="#" className="nav-link">ALUMINUM</a></li>
                                            <li><a href="#" className="nav-link">ALUMINUM MILL FINISH </a></li>
                                            <li><a href="#" className="nav-link">CHANNEL LETTER MAGNET</a></li>
                                            <li><a href="#" className="nav-link">COIL</a></li>
                                            <li><a href="#" className="nav-link">CORRUGATED PLASTIC</a></li>
                                            <li><a href="#" className="nav-link">FOAM BOARD</a></li>
                                            <li><a href="#" className="nav-link">MDO </a></li>
                                            <li><a href="#" className="nav-link">POLYCARBONATE</a></li>
                                            <li><a href="#" className="nav-link">PVC</a></li>
                                            <li><a href="#" className="nav-link">RACEWAY</a></li>
                                            <li><a href="#" className="nav-link">STYRENE</a></li>
                                            <li><a href="#" className="nav-link">TRACK & LETTERS</a></li>
                                            <li><a href="#" className="nav-link">TRIM CAP</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="category-list.html" className="nav-link">SIGN FRAMES & DISPLAYS <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">SIGN FRAMES</a></li>
                                            <li><a href="#" className="nav-link">STANDOFFS</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="category-list.html" className="nav-link">TOOLS & ACCESSORIES <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">KNIVES & CUTTING</a></li>
                                            <li><a href="#" className="nav-link">PLOTTER BLADES</a></li>
                                            <li><a href="#" className="nav-link">ROUTER BITS</a></li>
                                            <li><a href="#" className="nav-link">TAPE</a></li>
                                            <li><a href="#" className="nav-link">TOOLS & ACCESSORIES</a></li>
                                            <li><a href="#" className="nav-link">WRAP TOOLS</a></li>
                                        </ul>
                                    </li>


                                    <li><a href="category-list.html" className="nav-link">EQUIPMENT <span>»</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a href="#" className="nav-link">KALA -APP-TABLE</a></li>
                                            <li><a href="#" className="nav-link">LAMINATORS</a></li>
                                            <li><a href="#" className="nav-link">PLOTTER</a></li>
                                            <li><a href="#" className="nav-link">PRINTER</a></li>
                                            <li><a href="#" className="nav-link">PRINTER PARTS AND ACCESSORIES</a></li>
                                        </ul>
                                    </li>




                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Brands
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li><a href="#" className="nav-link">Avery</a></li>
                                    <li><a href="#" className="nav-link">Hexis</a></li>
                                    <li><a href="#" className="nav-link">Nekoosa</a></li>
                                    <li><a href="#" className="nav-link">Poli-Tape</a></li>
                                    <li><a href="#" className="nav-link">Prism</a></li>
                                    <li><a href="#" className="nav-link lastchild">Specialty Materials</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="nav-link">Application Assistants</a></li>


                        </ul>
                        <ul className="navbar-nav m-auto me-0">
                            <li className="nav-item header-search">
                                {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search" /> */}
                                <div className="search-box">
                                    <button className="btn-search"><i className="fa fa-search"></i></button>
                                    <input type="text" className="input-search" placeholder="Type to Search..." />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </div>
}
export default Header