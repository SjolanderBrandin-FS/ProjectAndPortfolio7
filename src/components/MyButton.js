import React from 'react'

const MyButton = props => {
    return (
        <button style={styles.btn} onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default MyButton

const styles = {
    btn: {
        fontWeight: 'red',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        color: '#548687',
        margin: '1%',
        border: 'solid 0.15rem',
        cursor: 'pointer',
        width: '30%'
    }
}


