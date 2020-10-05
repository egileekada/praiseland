import React, { Component } from 'react'

import Toolbar from '../navigation_bar/Toolbar'
import SideDrawer from '../navigation_bar/SideDrawer'
import Backdrop from '../navigation_bar/Backdrop'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState({sideDrawerOpen: !this.state.sideDrawerOpen })
    // this.setState((prevState) => {
    //   return { sideDrawerOpen: !prevState.sideDrawerOpen};
    // });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop 

    if (this.state.sideDrawerOpen) { 
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer click={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    )
  }
}

export default App