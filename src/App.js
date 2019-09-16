import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import CardList from './components/CardList';

const App = () => {
    const [friends, setFriends] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setFriends(users));
    }, []);

    const onSearchChange = event => {
        setSearchfield(event.target.value);
    };

    const filteredFriends = friends.filter(
        friend =>
            friend.username.toLowerCase().includes(searchfield.toLowerCase()) ||
            friend.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    if (friends.length === 0) {
        return <h1 className="tc calisto f2 light-blue">Loading</h1>;
    }
    return (
        <div className="calisto tc">
            <h1 className="f1 underline ttu light-blue">My Cat Friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList friends={filteredFriends} />
            </Scroll>
        </div>
    );
};

export default App;
