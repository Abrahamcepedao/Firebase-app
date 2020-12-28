import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import firebase from '../database/firebase'

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
        <View>
            <Text>User lists</Text>
        </View>
    )
}
