import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskComponent = (props) => {
    return (
        <View style={styles.item}>
                <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 15
    },

    itemText: {
        maxWidth: '100%'
    },
    circle: {
        width: 12,
        height: 12,
        borderColor:'blue',
        borderWidth:2,
        borderRadius: 10
    }
});

export default TaskComponent;