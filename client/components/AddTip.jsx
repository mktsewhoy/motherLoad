import React from 'react'
import {connect} from 'react-redux'
import ListItem from './ListItem'
// import {registerUserRequest} from '../actions/register'
// import {loginError} from '../actions/login'

const AddTip = () => {
    return (
        <div className='content'>
            <h2 className='title is-2'>Tweet of advice</h2>
            <p>
                
{/* 
class AddTip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      advice_type: '',
      text: '',
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {title, advice_type, text} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="Register form box" onSubmit={this.submit}>
        <h2 className="title is-2">Add Tip</h2>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">*Username
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">*E-mail
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="E-mail" type="text" name="email" onChange={this.updateDetails}/>
          </label>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">*First Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="First Name" type="text" name="first_name" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">*Last Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">*Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">*Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(AddTip)
*/}
            </p>
        </div>
    )
}

export default AddTip