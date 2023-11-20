import React from 'react'
//Additional Imports:
import ImageUrl from '../images/ProIcon.jpg'
import MyIcons from './MyIcons'
import MyButton from './MyButton'
//Dummy Component for FORM =====================================|

const MyForm = props => {
    return (
        //code to be determined
        <form style={styles.form}>
            <div style={styles.inputCont}>
                <input
                    style={styles.input}
                    placeholder='Write Your Thoughts Here...' />
            </div>
            <div style={styles.iconCont}>
                <MyIcons IconImg={ImageUrl} style={styles.icon} />
                <p style={styles.p}>What's on your mind?</p>
                <MyButton btnText='Post' style={styles.btn} />
            </div>
        </form>
    )
}

export default MyForm

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: '20vh',
        border: '1px solid white',
        backgroundColor: 'darkgrey',
        margin: '1px 5px'
    },
    inputCont: {
        marginTop: '10px',
    },
    input: {
        padding: '5px',
        width: '80%',
    },
    iconCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px'
    },
    btn: {
        alignItems: 'center'
    },
    p: {
        marginRight: '150px',
        marginLeft: '10px'
    }
}