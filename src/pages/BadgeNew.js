import React from 'react';
import './styles/BadgeNew.css';
// import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component{
    state = {
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }};

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            // form: nextForm,
            form:{
            ...this.state.form,
            [e.target.name] : e.target.value,
            },
        });
    };

    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} 
                                   lastName={this.state.form.lastName} 
                                   twitter={this.state.form.twitter} 
                                   jobTitle={this.state.form.jobTitle}
                                   email = {this.state.form.email}
                                   avatarUrl="https://images.unsplash.com/photo-1539299056747-6ed44e2f8e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange = {this.handleChange}
                            formValues = {this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;