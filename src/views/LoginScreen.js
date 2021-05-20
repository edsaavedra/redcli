import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';



export default function LogIn() {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                value={text} />
            <Button
                onPress={onPressLearnMore}
                title="Log In"
                color="#841584"
                accessibilityLabel="Log in button"
            />
        </View>
    );
}

const onPressLearnMore = () => {
    console.info('%c 💩 ', 'background: #ffbf27', "yoo");
}
const text = 'Input'
const onChangeText = () => { }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
