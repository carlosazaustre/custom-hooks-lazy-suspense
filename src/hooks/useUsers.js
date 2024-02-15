import axios from 'axios';
import { useState, useEffect } from 'react';

function useUsers() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    };

    const addUser = (event) => {
        event.preventDefault();
        const user = event.target.username.value;
        setUsers([...users, { id: users, name: user }]);
        event.target.username.value = '';
    };

    const removeUser = (userId) => {
        setUsers(users.filter((user) => user.id !== userId ))
    };

    const getUsers = () => {
        // throw new Error('Not implemented');
        return users
    };

    return {
        fetchUsers, 
        addUser, 
        removeUser, 
        getUsers
    };
}

export default useUsers;