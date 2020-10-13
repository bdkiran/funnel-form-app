import React, { Component } from 'react'

export class FormComponent extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handleSubmit();
    }

    render() {
        return (
            <form>
                <input
                    name='firstName'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <input
                    name='lastName'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <input
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <input
                    name='phone'
                    placeholder='Phone Number'
                    value={this.state.phone}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}

export default FormComponent;
