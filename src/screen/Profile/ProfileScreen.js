import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {
    Header,
    Container,
    Content,
    Thumbnail,
    Text
} from 'native-base';

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
            <Thumbnail square source={{uri:uri}}/>
            <Text> Nama : Gilang Aditya R</Text>
            <Text> Kelas : 3IA19 </Text>
            <Text> Kelas : </Text>

            <Text> Daftar Praktikum </Text>
             {/* List or another */}
        </Content>
      </Container>
    );
  }
}
