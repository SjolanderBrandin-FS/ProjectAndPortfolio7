import React, { Component } from 'react'
// Addition Imports ========================================|
import GroceryArticle from '../components/GroceryArticle'
//import GroceryForm from '../components/GroceryForm'
import AdobeXD from '../images/AdobeXD.png'
import API from '../images/API.png'
import CSexample1 from '../images/CSexample1.png'


class Projects extends Component {
  state = {
    gList: [{
      gName: 'Rick n Morty Library',
      gDescp: 'This project was an API assignment, using C# as the language',
      gImg: CSexample1,
      gAlt: 'Image of Project for C#'
    },
    {
      gName: 'AdobeXD Mockups',
      gDescp: 'An example of pre build work up methods to help increase the chance of a successful site',
      gImg: AdobeXD,
      gAlt: 'Image of AdobeXD Mock up site and application layouts/design'
    },
    {
      gName: 'API Data Work',
      gDescp: 'This project shows the ability to navigate and properly use large APIs as well as JS language skills',
      gImg: API,
      gAlt: 'Brown book with story inside'
    }],
    color: 'White'
  }
  // Lifecycles
  // Mounting(CompnentDidMount), Updating(ComponentDidUpdate), Unmounting(ComponentDidUnmount)

  // ** I did what you showed in the video and I read through the react.js Docs,
  // but was unable to figure out how to get this to work. Maybe you can show
  // me in your feedback video**...

  componentDidMount() {
    //Runs after the first render() lifecycle
    console.log('componentDidMount() lifecycle')
    // Change state after 2sec
    // from time component is rendered
    setTimeout(() => {
      this.setState({ color: '#548687' })
    }, 1000)
  }

  //Create a function for the input values
  // ******** I was unable to get the Name and Description to display properly,
  // this is a small piece I was unable to figure out. I was able to get the Name
  // or the Description to display in both places depending on if the Description
  // was entered into the input field or not.

  //See Below (I left my attempt because it doesn't break the code):
  getInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  addItem = e => {
    e.preventDefault()
    this.setState({
      gList: [...this.state.gList, { gName: this.state.gName, gDescp: this.state.gDescp, gImg: this.state.gImg }]
    })
    //Clear Form
    e.target.reset()
  }
  //Splice Method. Not preferred. Use as last resort.
  removeItem = key => {
    const newgList = [...this.state.gList]
    newgList.splice(key, 1)
    this.setState(() => ({
      gList: newgList
    }))
  }

  //Filter Method. Attempt to make work. Current code state not efficient

  // Due to time, and lack of figuring it out.
  // I was unable to figure out how to get the Filter Method to work.

  // removeItem = (key) => {
  //   const newgList = this.state.gList.filter((key) => groc.key !== key)
  //   this.setState(() => ({
  //     gList: newgList
  //   }))
  // }

  render() {
    let groceryList = this.state.gList.map((element, i) => {
      return <GroceryArticle key={i} val={element} delMe={() => this.removeItem(i)} />
    })
    console.log('Render Lifecycle')
    return (
      <div style={styles.container}>
        <h1 style={{ color: this.state.color }}>My Projects</h1>
        <div style={styles.form}>
          {/* <GroceryForm
            getInput={this.getInput}
            addItem={this.addItem}
            btnText="Add Project"
          /> */}
        </div>
        <div style={styles.list}>
          {groceryList}
        </div>
      </div>
    )
  }
}

export default Projects

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontSize: '1rem',
    borderRadius: '2%',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  main: {
    margin: '25px'
  },
  form: {
    display: 'flex',
    justifyContent: 'center'
  },
  cycle: {
    color: 'grey'
  }
}