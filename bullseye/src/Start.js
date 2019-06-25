import React from 'react';
import './Loading.css';
import { Link } from 'react-router-dom';


class Start extends React.Component {
    render() {
        return (
            <div className="Loading-container">
                <h1 className="Loading-header">Start Game!</h1>
                <Link className="Loading-start-link" to="/">End game</Link>
            </div>
        );
    }
}

export default Start