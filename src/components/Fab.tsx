import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useAppDispatch } from '../utils/hooks';

interface Props {
    title : string;
    dispatch : any;
    position : string;
};

const Fab = ( props : Props ) => {

    const dispatch = useAppDispatch();

    const position = (props.position === 'left') ? styles.locationBL : styles.locationBR;

    return (
        <TouchableOpacity
            style={position}
            onPress={() => dispatch(props.dispatch) }
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ props.title }</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    locationBL : {
        position : 'absolute',
        bottom : 30,
        left : 30
    },

    locationBR : {
        position : 'absolute',
        bottom : 30,
        right : 30
    },

    button : {
        backgroundColor : '#1B00FD',
        width : 60,
        height : 60,
        borderRadius : 100,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        shadowColor: '#000'
    },

    buttonText : {
        color : 'white',
        fontSize : 25,
        fontWeight : 'bold',
    },
});

export default Fab;