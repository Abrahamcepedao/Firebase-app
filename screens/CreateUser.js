import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

export default function CreateUser(props) {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const addUser = async () => {
        if(name && email && phone){
            try{
                await firebase.db.collection('users').add({
                    name: name,
                    email: email,
                    phone: phone
                })
                props.navigation.navigate('UsersList')
            } catch (error) {
                console.log(error);
            }
        } else{
            alert('fill all fields')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User" onChangeText={(value) => setName(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email User" onChangeText={(value) => setEmail(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone User" onChangeText={(value) => setPhone(value)}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Save User" onPress={addUser}/>
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