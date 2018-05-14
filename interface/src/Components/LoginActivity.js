import React from "react";
import {Link, Redirect} from "react-router-dom";
import firebase from "firebase/app";

export default class LoginActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            authenticated: firebase.auth().currentUser != null
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.authenticated) {
             firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                 .then((user) => {
                     this.setState({
                         authenticated: true,
                     });
                 })
                 .catch((err) => {
                     alert(err.message);
                 });
         }
    }

    render() {
    

        // Redirect to home if user is not logged in.
        if (this.state.authenticated) {
            this.props.history.push("/");
        }
        return (
            <div>

                <div className="cont d-flex justify-content-center">
                    <div className="card align-self-center">
                        <div className="card-block p-5">
                            <h2 className="mt-0">Log In</h2>
                            <form onSubmit={evt => this.handleSubmit(evt)}>
                                {/* Email Input Field */}
                                <div className="form-group">
                                    <input id="email" type="email" className="form-control" placeholder="enter your email"
                                    value={this.state.email}
                                    onInput={evt => this.setState({email: evt.target.value})}
                                    />
                                </div>

                                {/* Password Input Field */}
                                <div className="form-group">
                                    <input id="password" type="password" className="form-control" placeholder="enter a password"
                                    value={this.state.password}
                                    onInput={evt => this.setState({password: evt.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="w-100 btn btn-primary">
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            {/* Give the option to Sign up. */}
                            <p>Don't yet have an account? <Link to='signup'>Sign up!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
