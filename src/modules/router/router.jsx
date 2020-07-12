import Home from '../home/index'
import Acting from '../acting/index'
import Dance from '../dance/index'
import Reel from '../reel/index'
import Contact from '../contact/index'
import MenuList from '../../components/MenuItems/index'
import SlidingPanel from 'react-sliding-side-panel'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class AppRouter extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <MenuList />
                    </div>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/Home/" component={Home} />
                        <Route path="/Acting/" component={Acting} />
                        <Route path="/Dance/" component={Dance} />
                        <Route path="/Reel/" component={Reel} />
                        <Route path="/Contact/" component={Contact} />
                    </div>
                </div>
            </Router>
        )
    }
}
export default AppRouter
