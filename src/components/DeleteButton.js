import React from 'react'

const DeleteButton = props => {
    return (
        <button style={styles.btn} onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default DeleteButton

const styles = {
    btn: {
        fontWeight: 'red',
        backgroundColor: 'lightgrey',
        color: '#60495A',
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer'
    }
}