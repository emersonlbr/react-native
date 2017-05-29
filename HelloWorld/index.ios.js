// Usando o padrao basico do JavaScript, mais a frente mudaremos para um codigo mais rebuscado

// 1. Declaração das bibliotecas

import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';﻿
import Welcome from './welcome';

// 2. Criar componentes

var HelloWorld = React.createClass({
  render: function(){
    return <View style={styles.container}>
    <Text>
    Hello World!!
    </Text>
    <Text>
    Emerson is too Hot haha!
    </Text>
    <Welcome/>
    </View>
  }
});

// 3. Criar os Estilos

var styles = StyleSheet.create(
  {
    container:
    {
      flex : 1,
      // alinhamento vertical
      justifyContent : 'center',
      // alinhamento horizontal
      alignItems : 'center'
    }
  }
)

// 4. Exibir o componente
AppRegistry.registerComponent('HelloWorld', function(){
  return HelloWorld;
});
