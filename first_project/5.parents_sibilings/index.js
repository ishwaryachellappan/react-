function Header() {
    return (
        <div>
            <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
            </div>
    )
}


function MainContent() {
    return (
        <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
    </ol>
    )
}
function Footer() {
    return (
        <footer className="Footer">
                <small>© 2022 All rights reserved.</small>
            </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer  />
            </div>
        
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))