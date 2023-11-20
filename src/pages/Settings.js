import React, { Component } from 'react'
import UserForm from '../components/UserForm'

class Settings extends Component {
    state = {
        userData: [],
        isLoaded: true
    }
    // function Settings(){
    // const [userData] = useState([])
    // const [isLoaded] = useState([{ isLoaded: true }])

    componentDidMount() {
        const profile = this.state.isLoaded
        if (profile) {
            this.fetchData()
        } else {
            console.log(`Can not load the Settings Page`)
        }
    }

    fetchData() {
        this.setState({
            isLoaded: true,
            userData: []
        })
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            // .catch(err =>{
            //  console.log(`The error - ${err} has occured`);   
            // })
            // Now Map through the Array
            .then(responseJSON => responseJSON.results.map(user => ({
                //setUserData({
                firstName: `${user.name.first}`,
                lastName: `${user.name.last}`,
                street: `${user.location.street}`,
                city: `${user.location.city}`,
                state: `${user.location.state}`,
                postcode: `${user.location.postcode}`,
                username: `${user.login.username}`,
                password: `${user.login.postcode}`,
                phone: `${user.phone}`,
                picture: `${user.picture.large}`,
            }
            )))
            .then(userData => this.setState({
                userData,
                isLoaded: false
            }))
            .catch(err => console.log(err))

    }

    // useEffect(() => {
    //     const url = 'https://randomuser.me/api/'

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url)
    //             const json = await response.json()
    //             console.log(json.slip.userData)
    //             isLoaded(json.slip.userData)
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchData(url)
    //         .catch(err => {
    //             console.log(`The error - ${err} has occured`)
    //         })
    //         .then(responseJSON => responseJSON.results.map(user => ({
    //             userData: {
    //                 firstName: `${user.name.first}`,
    //                 lastName: `${user.name.last}`,
    //                 street: `${user.location.street}`,
    //                 city: `${user.location.city}`,
    //                 state: `${user.location.state}`,
    //                 postcode: `${user.location.postcode}`,
    //                 username: `${user.login.username}`,
    //                 password: `${user.login.password}`,
    //                 phone: `${user.phone}`,
    //                 picture: `${user.picture.large}`,
    //             }
    //         })))

    // })
    render() {
        const { isLoaded, userData } = this.state
        return (
            <section style={styles.container} >
                <h1 style={styles.h1}>Settings Page</h1>
                {!isLoaded && userData.length > 0 ? userData.map(user => {
                    const { firstName, lastName, username } = user
                    return <UserForm
                        key={username}
                        firstName={firstName}
                        lastName={lastName}
                    />
                }) : null
                }
            </section >
        )
    }
}
export default Settings

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    h1: {
        color: '#548687'
    }
}