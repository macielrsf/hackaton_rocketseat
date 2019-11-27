import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3.0,
        borderRadius: 8,
        height: 100,
        margin: 20,
        elevation: 5,
        flex: 1
    }
});

export default class ACard extends Component {

    render() {
        const { style } = this.props;

        return (
            <View style={[styles.box, style]}>
                {this.props.children}
            </View>
        );
    }
}
