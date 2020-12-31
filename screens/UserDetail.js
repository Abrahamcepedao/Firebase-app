import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert } from 'react-native'
import firebase from '../database/firebase'

export default function UserDetail(props) {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data()
        console.log(user)
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
    }

    useEffect(() => {
        getUser(props.route.params.userId)
        setLoading(false);
    },[])

    const updateUser = async () => {
        if(name && email && phone){
            const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
            await dbRef.set(({
                name: name,
                email: email,
                phone: phone
            }))
            props.navigation.navigate('UsersList')
        } else{
            alert('fill all fields')
        }
    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate('UsersList')
    }

    const openAlert = () => {
        Alert.alert('Remove user', 'Are you sure?', [
            {text: 'Yes', onPress: () => deleteUser()},
            {text: 'No', onPress: () => console.log('canceled')}
        ])
    }

    if(loading){
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View> 
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User" value={name} onChangeText={(value) => setName(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email User" value={email} onChangeText={(value) => setEmail(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone User" value={phone} onChangeText={(value) => setPhone(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Update User" onPress={updateUser}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Delete User" color="red" onPress={openAlert}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})