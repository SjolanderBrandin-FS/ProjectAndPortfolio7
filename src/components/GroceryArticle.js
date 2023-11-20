import React from 'react'
import MyButton from './MyButton'

const GroceryArticle = props => {
    return (
        <article style={styles.myArticle}>
            <img src={props.val.gImg} alt={props.val.gAlt} />
            <h1>{props.val.gName}</h1>
            <p>{props.val.gDescp}</p>
            <div style={styles.buttons}>
                <MyButton btnText="Edit" />
                <MyButton btnText="Delete" onClick={props.delMe} style={styles.btnColor} />
            </div>
        </article>
    )
}
export default GroceryArticle

const styles = {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: 'black',
        color: 'rgb(163,173,194)',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnColor: {
        color: 'white'
    }
}