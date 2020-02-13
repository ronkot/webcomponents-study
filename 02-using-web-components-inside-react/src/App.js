import React, { Component, createRef } from 'react'
import logo from './logo.svg'
import './App.css'

import './slide-panel-lit-element'
import './cat-list'

class App extends Component {
  state = {
    cats: [
      {
        name: 'Pekka töpöhäntä',
        url:
          'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        name: 'Monni',
        url:
          'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  }

  catListRef = createRef()

  componentDidMount() {
    this.catListRef.current.addEventListener('cat-list-select-cat', event => {
      console.log('Selected cat', event.detail)
    })

    this.updateCatList()
  }

  addCat = evt => {
    this.setState(
      {
        cats: [
          {
            name: 'Musti',
            url:
              'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          ...this.state.cats
        ]
      },
      this.updateCatList
    )
  }

  /**
   * Because react always tries to pass props to standard and custom elements as an attribute,
   * we need to do passing manually when a property is needed.
   *
   * Attributes are suitable for strings and booleans, for other types we need to use properties.
   */
  updateCatList = () => {
    this.catListRef.current.cats = this.state.cats
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <slide-panel-lit-element>
            <p slot="title" style={{ display: 'flex', alignItems: 'center' }}>
              Open to see awesome cats!{' '}
              <img
                width={50}
                src="https://media.giphy.com/media/38bFvh7mpryOA/giphy.gif"
              ></img>
            </p>
            <button onClick={this.addCat}>Add new cat to the list</button>
            <cat-list ref={this.catListRef} title="Meow!"></cat-list>
          </slide-panel-lit-element>
        </header>
      </div>
    )
  }
}

export default App
