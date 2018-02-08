import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderUsers() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <h3>Protected List of Admins</h3>
                <ul>{this.renderUsers()}</ul>
            </div>    
        );
    }
}

function mapStateToProps({ admins}) {
    return { admins };
}

const loadData = ({ dispatch }) => dispatch(fetchAdmins());
   
export default {
    loadData,
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage))
};