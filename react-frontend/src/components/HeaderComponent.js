import React, { Component } from 'react'

const style1 = {
    color:'white'
}

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-primary">
                    <div><a href="/" className="navbar-brand" style={style1
                    }>Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
