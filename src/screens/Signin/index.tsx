import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
} from 'react-native/index';
import { useNavigation } from '@react-navigation/core';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style'

import { ButtonIcon } from '../../components/Buttonicon';
import { Background } from '../../components/Background';

export function SignIn(){
  const navegation = useNavigation()

  function handleSignIn() {
    navegation.navigate('Home')
  }
  return(
    <Background>
      <View style={styles.container}>
      <Image
      source={IllustrationImg}
      style={styles.image}
      resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
        title='Entrar com Discord'
        onPress={handleSignIn}
        />
      </View>
      </View>
   </Background>
  )
}