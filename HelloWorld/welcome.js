import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';﻿

var Welcome = React.createClass(
  {
    render: function()
    {
      return <View>
      <Text>
       This is from the welcome.js file
      </Text>
      
      <Text>
         This is another paragraph
      </Text>
      
      </View>
    }
  }
)

// expotando o arquivo
module.exports = Welcome;
