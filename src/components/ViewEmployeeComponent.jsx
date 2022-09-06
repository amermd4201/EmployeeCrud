import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: this.props.match.params.id,
       employee:{}
    }
  }

  componentDidMount(){
    EmployeeService.getEmployeeById(this.state.id).then( res => {
      this.setState({employee: res.data});
    })
  }
  cancel(){
    this.props.history.push('/employees');
}
  render() {
    return (
      <div>
        <br></br>
        <div className='card col-md-6 offset-md-3 ' >
          <h3 className='text-center'>View Employee Details</h3>
          <div className='card-body'>
            <div className='row'>
              <label style={{color:"blue"}}>Employee first Name :</label>
              <div><u style={{color:"red"}}>{this.state.employee.firstName }</u></div>
            </div>
            <br/>
            <div className='row'>
              <label style={{color:"blue"}}>Employee last Name :</label>
              <div><u style={{color:"red"}}>{this.state.employee.lastName}</u></div>
            </div>
            <br/>
            <div className='row'>
              <label style={{color:"blue"}}>Employee email Id :</label>
              <div><u style={{color:"red"}}>{this.state.employee.emailId}</u></div>
            </div>
            <button className='btn btn-danger mt-3' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Back to Home</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewEmployeeComponent