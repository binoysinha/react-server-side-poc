import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Users App</title>
                    <meta property="og:title" content="Users App" />

                </Helmet>
                Here's a big list of users
                <ul>{this.renderUsers()}</ul>
            </div>    
        );
    }
}

function mapStateToProps( {users }) {
    return { users };
}

const loadData = ({ dispatch }) => dispatch(fetchUsers());
   
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};