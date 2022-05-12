import React from 'react';
import Aux from '../../hook/Auxx';
import "./Layout.css";

function Layout(props) {
  return (
    <Aux>
      <div>
        Toolbar, SideDrawer, Backdrop
      </div>
      <main className='Content'>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout
