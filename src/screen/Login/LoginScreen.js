import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Thumbnail,
    Button,
    Footer
} from 'native-base';
import {StyleSheet, Image, Text, View} from 'react-native';

export default class LoginScreen extends Component{
    render(){
        return(
            <Container style={{width:'100%', height:'100%'}}>
                <Content style={{marginTop:20}}>
                    <Image source={require('../../img/logo.jpg')} style={{width:'100%', height:250}} resizeMode='contain'/>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <View style={{alignSelf:'center', flex:1, flexDirection:'row'}}>
                            <Button style={{marginTop:15, height:50, width:100, justifyContent:'center', marginRight:10, backgroundColor:'purple'}}>
                                <Text style={{color:'white'}}>Login</Text>
                            </Button>
                            <Button style={{marginTop:15, height:50, width:100, justifyContent:'center', backgroundColor:'purple'}}>
                                <Text style={{color:'white'}}>Register</Text>
                            </Button>
                        </View>
                    </Form>
                    
                </Content>
            </Container>
        );
    }
}