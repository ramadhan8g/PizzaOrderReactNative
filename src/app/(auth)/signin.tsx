import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router'
import Button from '@/components/Button';
import Colors from '@/constants/Colors';

export default function signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Sign in' }} />
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button text="Sign in" />
            <Link href="/signup" style={styles.textButton}>
                 Create an account
                </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        alignContent: 'center',
    },
    container:{
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        color: 'gray',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
    },
    textButton:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    }
})