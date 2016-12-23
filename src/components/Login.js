import React, {Component} from 'react'
import request from 'superagent'

class Login extends Component {

    submitHandler(e) {
        request.post('http://base_restful-web.dev.com/v1/site/login')
            .send({username: this.refs.username.value, password: this.refs.password.value})
            .end(function (err, res) {
                // console.log(err);
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
                        <label>Username</label>
                        <input type="text" className="form-control" ref="username" placeholder="Username"/>
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