function NavBar (){
    return (
        <header className="navbar">
            <a className="navbar-item current-navbar" href="/"> Image Resizer </a>
            <a className="navbar-item" href="/compressor"> Image Compressor </a>
            <a className="navbar-item" href="/opimizer"> Image Optimizer </a>
            <a className="navbar-item" href="/converter"> Image Convertor </a>
        </header>
    )
}

export default NavBar