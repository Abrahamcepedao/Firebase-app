import React, { useEffect, useState } from 'react'
import { View, Button, ScrollView } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.docs.forEach(doc => {
                const {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(users)
        })
    }, [])

    return (
        <ScrollView>
            <Button title="Create User" onPress={() => props.navigation.navigate("CreateUser")}/>
            {
                users.map((user) => {
                    return (
                        <ListItem
                            key={user.id}
                        >
                            <ListItem.Chevron/>
                            <Avatar title="AC"/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}
