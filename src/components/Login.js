import React, {Component} from 'react'
import request from 'superagent'

class Login extends Component {

    submitHandler(e) {
        console.log(e);
        request.post('http://dev.com/login')
            .send({email: this.refs.email.value, password: this.refs.password.value})
            .end(function (err, res) {
                console.log(err);
                if (err || !res.ok) {
                    alert('Oh no! error');
                } else {
                    alert('yay got ' + JSON.stringify(res.body));
                }
            });

        e.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" ref="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" ref="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login