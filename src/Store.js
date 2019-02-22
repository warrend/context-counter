import React, { Component, createContext } from 'react';

export const AppContext = createContext()

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  // crud functions here
  // or import crud functions from another js file

  render() {
    const storeData = { count: this.state.count, changeCount: this.changeCount}
    console.log("STORE: Count ", this.state.count)
    return (
      <AppContext.Provider value={storeData}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default Store