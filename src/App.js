import React from 'react';
import axios from 'axios';

import './App.css';

import ProfileList from './ProfileList';
import ProfileCard from './ProfileCard';

class App extends React.Component {
    state = {
        userData: {},
        userFollowers: []
    };

    componentDidMount() {
        axios.all([axios.get('https://api.github.com/users/bigknell'), axios.get('https://api.github.com/users/bigknell/followers')]).then(data => {
            console.log(data);

            this.setState({ userData: data[0].data, userFollowers: data[1].data });
        });
    }
    render() {
        return (
            <div className="App">
                <h2>User:</h2>
                <ProfileCard userData={this.state.userData} />
                <h2>Followers:</h2>
                <ProfileList userFollowers={this.state.userFollowers} />
            </div>
        );
    }
}

export default App;
