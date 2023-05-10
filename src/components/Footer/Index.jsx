import "./Footer.css"

const Footer  = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Rectangle.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com">
            <img src="/img/facebook.png" alt="f" />
            </a>
            <a href="https://www.instagram.com/">
            <img src="/img/instagram.png" alt="i" />
            </a>
            <a href="https://twitter.com/?lang=es">
            <img src="/img/twitter.png" alt="t" />
            </a>
        </div>
        <img className="logo" src="/img/logo.png" alt="logo" />
        <strong>Realizado por Victor Cruz</strong>

    </footer>

}

export default Footer