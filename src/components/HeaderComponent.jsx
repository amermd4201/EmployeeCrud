import React, { Component } from 'react'

export class HeaderComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='https://ojas-it.com' className='navbar-brand'>Employee Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent