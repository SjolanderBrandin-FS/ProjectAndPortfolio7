import React, { Component } from 'react'
// Addition Imports ========================================|
import SkillsArticle from '../components/SkillsArticle'
import SkillsForm from '../components/SkillsForm'

class Skills extends Component {
    state = {
        gList: [{
            gName: 'API Work (2yrs)',
            gDescp: 'I have completed multiple sites using different languages to access APIs with my strongest experience being in C# and JavaScript.'
        },
        {
            gName: 'AdobeXD Creative Cloud (2yrs)',
            gDescp: 'From photoshop to AdobeXD I have the fundementals of each tool and how to use them in my arsenal. I have created wireframes and full mock ups of almost every project I have built.'
        },
        {
            gName: 'Windows (8yrs)',
            gDescp: 'This is my prefered OS, and is what I use in my primary rig at home.'
        },
        {
            gName: 'Design (2.5yrs)',
            gDescp: 'I have plenty of experience with research and execution with the design aspect of web developement, using CSS/SCSS and User Interface (UI) techniques that are proven in the industry.'
        },
        {
            gName: 'Coding Languages (3yrs)',
            gDescp: 'I am versed in many languages, with more practice than others, but have the fundamentals of each down. My language base includes: C#, C++, JavaScript, Python, Ruby, NodeJS, HTML5 and a few more that I have touched on.'
        },
        {
            gName: 'Frameworks/Formats (3yrs)',
            gDescp: 'I have experience with JSON, MVC, Bootstrap, CRUD, React, Scrum and Agile.'
        },
        ],
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
            gList: [...this.state.gList, { gName: this.state.gName, gDescp: this.state.gDescp }]
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
            return <SkillsArticle key={i} val={element} delMe={() => this.removeItem(i)} />
        })
        console.log('Render Lifecycle')
        return (
            <div style={styles.container}>
                <h1 style={{ color: this.state.color }}>Skills</h1>
                <div style={styles.form}>
                    <SkillsForm
                        getInput={this.getInput}
                        addItem={this.addItem}
                        btnText="Add Skill"
                    />
                </div>
                <div style={styles.list}>
                    {groceryList}
                </div>
            </div>
        )
    }
}

export default Skills

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
        justifyContent: 'center',
        color: 'black'
    },
    cycle: {
        color: 'grey'
    }
}