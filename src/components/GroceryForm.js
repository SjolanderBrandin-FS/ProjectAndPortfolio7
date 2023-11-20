import React from 'react'
import MyButton from './MyButton'

const GroceryForm = props => {
    return (
        <form
            style={styles.myForm}
            onSubmit={props.addItem}>
            <div style={styles.inputCont}>
                <input
                    name="gName"
                    value={props.gName}
                    onChange={props.getInput}
                    style={styles.input}
                    placeholder="Name" />
                <input
                    name="gDescp"
                    value={props.gDescp}
                    onChange={props.getInput}
                    style={styles.input}
                    placeholder="Description" />
                <input
                    name="gImg"
                    value={props.gImg}
                    onChange={props.getInput}
                    style={styles.input}
                    placeholder="Image Upload" />
            </div>
            <MyButton {...props} />
        </form>
    )
}
export default GroceryForm

const styles = {
    myForm: {
        display: 'flex',
        flexDirection: ' column',
        width: '80%',
        padding: '2%',
        backgroundColor: '#548687',
        color: 'rgb(13,173,194)',
        borderRadius: '5px',
        boxShadow: '1px 6px 1px 1px rgbs(0, 0, 255, .1)'
    },
    inputCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: '0 5%'

    },
    input: {
        padding: '2%',
        margin: '1%',
        border: '2px solid black',
        width: '30%'
    }
}
