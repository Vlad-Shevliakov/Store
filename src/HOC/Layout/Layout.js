import React from 'react'
import Header from '../../components/Navigation/Header/Header'

import Drawer from '../../components/Navigation/Drawer/Drawer'

const Layout = props => {

    const links = [
        { text: 'Главная', to: '/', exact: true },
        { text: 'Товары', to: '/products', exact: false },
        { text: 'О нас', to: '/about', exact: false },
    ]

    return (
        <div>
            <Drawer />
            <Header links={links} />
            <main>
                { props.children }
            </main>
            {/* /////////// */}
            <footer style={
                {   width: '100%',
                    height: '400px',
                    backgroundColor: 'gold'
                }}
            />
        </div>
    )
}

export default Layout