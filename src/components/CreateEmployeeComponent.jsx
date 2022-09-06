import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    }
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId
        };
        console.log('employee =>' + JSON.stringify(employee));

        if (this.state.id !== '_add') {
          //  console.log('employee =>' + JSON.stringify(employee));
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            console.log('employee =>' + JSON.stringify(employee));
            EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
                this.props.history.push('/employees');
            })
        }
    }


    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName:event.target.value});
    }

    changeEmailHandler =(event) => {
        this.setState({emailId:event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if (this.state.id !==  '_add') {
            return <h3 className='text-center'>Add Employee</h3>            
        }else{
            return <h3 className='text-center'>Update Employee</h3>
        }
    }
    render() {
       
        return (
            <div>
                <br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 '>
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name :</label>
                                        <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name :</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email :</label>
                                        <input placeholder='Email Address' name='email' className='form-control' value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <button className='btn btn-success mt-3' onClick={this.saveOrUpdateEmployee.bind(this)}>Save</button>
                                    <button className='btn btn-danger mt-3' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent