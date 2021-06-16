import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameStatus: false, lastNameStatus: false}

  onClickFirstName = () => {
    this.setState(prev => ({firstNameStatus: !prev.firstNameStatus}))
  }

  onClickLastName = () => {
    this.setState(prev => ({lastNameStatus: !prev.lastNameStatus}))
  }

  render() {
    const {firstNameStatus, lastNameStatus} = this.state

    return (
      <div className="page-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="list-container">
          <div className="padd">
            <button
              className="btn"
              type="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstNameStatus && <p className="nameStyle">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="btn"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {lastNameStatus ? <p className="nameStyle">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
