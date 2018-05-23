import React from "react";
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import * as routes from '../constants/route';

const LoginActivity = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;
    
  
    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="cont d-flex justify-content-center">
        <div className="card align-self-center">
            <div className="card-block p-5">
                <h2 className="mt-0">Log In</h2>
                <form onSubmit={this.onSubmit}>
                    {/* Email Input Field */}
                    <div className="form-group">
                        <input id="email" type="email" className="form-control" placeholder="enter your email"
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="form-group">
                        <input id="password" type="password" className="form-control" placeholder="enter a password"
                        value={this.state.password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={isInvalid} className="w-100 btn btn-primary">
                            Sign In
                        </button>
                        { error && <p>{error.message}</p> }

                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default withRouter(LoginActivity);

export {
  SignInForm,
};