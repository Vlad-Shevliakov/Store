import React from 'react'
import Header from '../../components/Navigation/Header/Header'

import Drawer from '../../components/Navigation/Drawer/Drawer'

const Layout = props => {

    return (
        <div>
            <Drawer />
            <Header />
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout