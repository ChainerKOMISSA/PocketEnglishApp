import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function Usertest() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des utilisateurs' + error);
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