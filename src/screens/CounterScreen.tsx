import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppSelector } from '../utils/hooks';
import { increment, decrement } from '../utils/counterSlice';
import Fab from '../components/Fab';

const CounterScreen = () => {

    const counter = useAppSelector(state => state.counter.value);
    const dispatchIncrement = increment();
    const dispatchDecrement = decrement();

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: <Text style={ styles.color }>{counter}</Text>
            </Text>

            <Fab
                title='+1'
                dispatch={dispatchIncrement}
                position='left'
                />

            <Fab
                title='-1'
                dispatch={dispatchDecrement}
                position='right'
                />
        </View>
    );
};

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : 'black'
    },

    title : {
        textAlign : 'center',
        fontSize : 40,
        color : 'white'
    },

    color : {
        color : 'white',
        fontWeight : 'bold'
    }

});

export default CounterScreen;