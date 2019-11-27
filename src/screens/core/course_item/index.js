import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    Linking,
    Image,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    AContainer,
    ACard,
    AHeader
} from '~/components';

import companyMap from '~/assets/companies';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        flex: 1
    },
    content: {
        padding: 20,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
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
});

export default class CourseItem extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        const { item } = this.props.navigation.state.params;

        this.state = {
            item
        };
    }

    _renderStars() {
        const { item } = this.state;

        for ( let i = 0 ; i < item.stars ; i++ ) {
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

    _renderPosts() {
        return this.state.item.posts.map(item => {
            return (
                <ACard style={{ justifyContent: 'center', height: 180 }}>
                    <TouchableOpacity 
                        style={{ padding: 20 }}
                        onPress={() => Linking.openURL(item.content_url)}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Icon name="link" color="dodgerblue" size={30} />  
                        </View>
                        <Text style={styles.description}>
                            {item.title}
                        </Text>
                        <Text style={styles.description}>
                            {item.date}
                        </Text>
                        <View style={{ alignItems: 'flex-end', paddingVertical: 10 }}>
                            <Image
                                resizeMode="contain"
                                source={companyMap[this.state.item.powered_by_avatar]}
                                style={{ width: 100, height: 40 }}
                            />
                        </View>
                    </TouchableOpacity>
                </ACard>
            );
        });
    }

    render() {
        return (
            <AContainer>
                <AHeader>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon 
                                name="arrow-back" 
                                color="dodgerblue" 
                                size={30}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {this.state.item.name}
                        </Text>
                    </View>
                </AHeader>
                <ScrollView style={styles.content}>
                    <View>
                        {this._renderStars()}
                        <View style={{ paddingVertical: 20 }}>
                            <Text style={styles.title}>
                                Descrição:
                            </Text>
                            <Text style={styles.general}>
                                {this.state.item.description}
                            </Text>
                        </View>
                        {this._renderField('Oferecido por: ', this.state.item.powered_by)}
                    </View>
                    <Text style={[styles.title, { paddingVertical: 20 }]}>
                        Links
                    </Text>
                    {this._renderPosts()}
                </ScrollView>
            </AContainer>
        );
    }
}
