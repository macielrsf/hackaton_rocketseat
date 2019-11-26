import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { tintColor } from '~/helpers/theme';

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#323b42',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    label: {
        color: '#FFF',
        paddingRight: 10
    }
});

const iconMap = {
    Courses: 'home',
    UserCourses: 'playlist-add-check',
    Profile: 'person-outline'
};

export default class ATabBarButton extends Component {
    
    render() {
        const { routeName, focused } = this.props;
        const color = focused ? tintColor : '#FFF';

        return (
            <TouchableWithoutFeedback {...this.props}>
                <View style={styles.content}>
                    <Icon 
                        name={iconMap[routeName]} 
                        color={color}
                        size={25}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
