import React from 'react'

// Dummy Component
const MyIcons = props => {
    return (
        < img src={props.IconImg} alt={props.ImageAlt} styles={styles.icons} />
    )
}
export default MyIcons

const styles = {
    icons: {
        cursor: 'pointer',
        borderRadius: '50%',
        margin: '10px'
    }
}