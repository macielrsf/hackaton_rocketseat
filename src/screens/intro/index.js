import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
    AContainer,
    AText,
} from '~/components';

import {
    tintColor,
    primaryColor
} from '~/helpers/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        fontSize: 18
    },
    dotStyle: {
        backgroundColor: 'rgba(191,191,191,0.3)'
    },
    activeDotStyle: {
        backgroundColor: tintColor
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color: tintColor
    }
});

const SLIDES = [{
    title: 'Bem vindo ao ADA!',
    description: 'Contribuir para o crescimento do outro, é fundamental nos dias atuais, compartilhar conhecimento não se trata apenas de dividir ou repassar informações, mas sim abrir espaço para a troca, para o crescimento pessoal e profissional de ambos.'
}, {
    title: 'Compartilhando Conhecimento',
    description: 'Assim nasce o ADA, aplicativo onde o mentor compartilha conteúdo e acompanha sua equipe na construção do conhecimento.'
}];

export default class Intro extends Component {

    _doneHandle = async () => {
        try {
            await AsyncStorage.setItem('@intro_showed', 'true');
            this.props.navigation.navigate('AuthLoading');
        }
        catch(err) {
            console.warn(err);
        }
    }

    _renderItem = ({ item }) => {
        return (
            <AContainer style={styles.container}>
                <AText style={styles.title}>
                    {item.title} 
                </AText>
                <AText style={styles.description}>
                    {item.description} 
                </AText>
            </AContainer>
        );
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={this._renderItem}
                slides={SLIDES}
                onSkip={this._doneHandle}
                onDone={this._doneHandle}
                showSkipButton={true}
                doneLabel="Ok!"
                prevLabel="Voltar"
                nextLabel="Próximo"
                skipLabel="Pular"
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                buttonTextStyle={styles.buttonTextStyle}
            />
        );
    }
}
