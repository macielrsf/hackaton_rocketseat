import React, { Component, Fragment } from 'react';
import {
    View,
    Button,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    load
} from './actions';

import {
    AContainer,
    AInput,
    AHeader,
    AText
} from '~/components';

import Course from './components/course';

import { 
    tintColor, 
    bgColor,
    primaryColor
} from '~/helpers/theme';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        flex: 1
    },
    content: {
        flex: 1
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold'
    },
    divider: {
        borderBottomColor: bgColor,
        borderBottomWidth: 0.5
    },
    titleCase: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    numberCase: {
        color: bgColor,
        paddingTop: 20
    }
});

class Courses extends Component {

    componentDidMount() {
        this.props.load();
    }

    _renderItem = ({ item, idx }) => {
        return (
            <Course course={item} />
        );
    }

    _renderList() {
        return (
            <FlatList
                keyExtractor={(item, id) => item.id}
                renderItem={this._renderItem}
                data={this.props.courses}
            />
        );
    }

    _renderContent() {
        if ( this.props.loading ) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color={tintColor}
                    />
                </View>
            );
        }

        if ( !this.props.loading &&
             this.props.courses.length <= 0 ) {
            return (
                <View style={styles.loading}>
                    <Icon
                        name="refresh"
                        size={40}
                        color={tintColor}
                        onPress={() => this.props.load()}
                    />
                </View>
            );
        }

        return (
            <View style={styles.content}>
                {this._renderList()}
            </View>
        );
    }

    render() {
        return (
            <AContainer>
                <AHeader>
                    <View style={styles.header}>
                        <View />
                        <View>
                            <Icon name="add" color="dodgerblue" size={30} />
                        </View>
                    </View>
                </AHeader>
                {this._renderContent()}
            </AContainer>
        );
    }
}

const actions = {
    load
}

const mapStateToProps = (state) => {
    return ({
        loading: state.CoursesReducer.loading,
        courses: state.CoursesReducer.courses
    });
}

export default connect(mapStateToProps, actions)(Courses);
