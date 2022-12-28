function Header() {
    return (
        <header>
            <div className="header-logo">
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div className="header-logo_text">
                <h3>React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="header-right">
            <li>
                <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                <span>1205 руб.</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="user" />
            </li>
            </ul>
        </header>
    )
}

export default Header