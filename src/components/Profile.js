import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('interval');
        }, 1000);
    }

    componentDidUpdate() {}

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h3>Name : Rehman</h3>
                <h3>City : Vehari</h3>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    count : {this.state.count}
                </button>
            </div>
        );
    }
}

export default Profile;
