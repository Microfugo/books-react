import logo from "../../imagens/logo.svg"

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo"></img>
            <p>Books <strong>React</strong></p>
        </div>
    )
}

export default Logo