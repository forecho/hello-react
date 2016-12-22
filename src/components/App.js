import React, { Component } from 'react'
import request from 'superagent'

import Header from './Header'
import Footer from './Footer'
import Loading from './Loading'
import User from './User'

class App extends Component {
    constructor() {
        super()

        this.state = {
            isFetching: true,
            user: {
                name: '',
                avatar_url: ''
            }
        }
    }

    componentDidMount() {
        request.get('https://api.github.com/users/forecho')
            .then((res) => {
                this.setState({
                    isFetching: false,
                    user: res.body
                })
            })
    }

    render() {
        return (
            <div>
                <Header/>
                <hr/>
                {this.renderContent()}
                <hr/>
                <Footer/>
            </div>
        )
    }


    renderContent() {
        const {isFetching, user} = this.state
        return isFetching ? <Loading/> : <User user={user}/>
    }
}

export default App