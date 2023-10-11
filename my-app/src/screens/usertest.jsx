import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function Usertest() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.72:3001/users')
        .then((response) => response.json())
        .then((data) => setUsers(data.users))
        .catch((error) => {
            console.error('Erreur lors de la récupération des utilisateurs ' + error.message);
        });
    }, []);
  return (
    <View>
        {
            users.map((user) => {
                <Text key={user.id}>{user.name}</Text>
            })
        }
    </View>
  )
}

export default Usertest