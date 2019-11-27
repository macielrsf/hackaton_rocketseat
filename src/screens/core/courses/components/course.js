import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import companyMap from '~/assets/companies';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3.0,
        borderRadius: 8,
        height: 300,
        margin: 20,
        elevation: 5,
        flex: 1
    },
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        flex: 0
    },
    content: {
        paddingVertical: 20,
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0
    },
    title: {
        fontWeight: 'bold',
        flexWrap: 'wrap',
        fontSize: 18
    },
    descriptionKey: {
        fontSize: 14,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    descriptionValue: {
        fontSize: 14,
        flexWrap: 'wrap',
    },
    general: {
        fontSize: 14,
        color: 'grey',
        paddingBottom: 10
    },
    buttonText: {
        fontSize: 16,
        color: 'dodgerblue',
        fontWeight: 'bold'
    }
});

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false
        };
    }

    _subscribe = () => {
        let subscribe = !this.state.subscribe;
        this.setState({ subscribe });
    }

    _renderSubscribe() {
        if ( this.state.subscribe ) {
            return (
                <TouchableOpacity onPress={this._subscribe}>
                    <Text style={styles.buttonText}>INSCRITO!</Text>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity onPress={this._subscribe}>
                <Text style={styles.buttonText}>INSCREVER</Text>
            </TouchableOpacity>
        );
    }

    _renderStars() {
        const { course } = this.props;

        for ( let i = 0 ; i < course.stars ; i++ ) {
            return (
                <Icon name="star" color="orange" size={15} />
            );
        }
    }

    _renderField(key, value) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.descriptionKey}>
                    {key}
                </Text>
                <Text style={styles.descriptionValue}>
                    {value}
                </Text>
            </View>
        );
    }

    render() {
        const { course } = this.props;

        return (
            <View style={styles.box}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {course.name}
                        </Text>
                        <View>
                            {this._renderStars()}
                        </View>
                    </View>
                    <ScrollView style={styles.content}>
                        <Text style={styles.general}>
                            {course.description}
                        </Text>
                        {this._renderField('Oferecido por: ', course.powered_by)}
                        <View style={{ alignItems: 'flex-end', paddingVertical: 10 }}>
                            <Image
                                resizeMode="contain"
                                source={companyMap[course.powered_by_avatar]}
                                style={{ width: 100, height: 40 }}
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        {this._renderSubscribe()}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseItem', { item: course })}>
                            <Text style={styles.buttonText}>VER CONTEÚDO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Course);
