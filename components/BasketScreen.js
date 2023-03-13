import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <Text>BasketScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BasketScreen;