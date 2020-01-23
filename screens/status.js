import React, {Component} from 'react';
import { Container, Header, Title, Button, Tab, Tabs, TabHeading, Text, Separator, 
  Right, Body, Icon, Content, List, View, ListItem, Thumbnail, Left, } from 'native-base';

export default class Chat extends Component{
    constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  render(){
    return (
        <View>
            <List>
              <ListItem thumbnail>
              <Thumbnail source= {require('../Capture.png')} />     
                <Body>
                  <Text style={{fontWeight:'bold'}}>Status saya</Text>
                  <Text note>Ketuk untuk menambahkan pembaruan status...</Text>
                </Body>
              </ListItem>

                <Content style={{backgroundColor:'#ECE5DD', }}>
                <Separator bordered ><Text style={{fontSize:'16px', color:'#403c3b', }}
                >Pembaruan terkini</Text>
                </Separator>
                </Content>

                <ListItem thumbnail>
              <Thumbnail source= {require('../IMG-20190819-WA0004.jpg')} />     
                <Body>
                  <Text style={{fontWeight:'bold'}}>Siapa ya</Text>
                  <Text note>22 menit yang lalu</Text>
                </Body>
              </ListItem>

                <ListItem thumbnail>
              <Thumbnail source= {require('../FB_IMG_15119662317939456.jpg')} />     
                <Body>
                  <Text style={{fontWeight:'bold'}}>Gatau siapa</Text>
                  <Text note>Hari ini 06.26</Text>
                </Body>
              </ListItem>
            </List>
          </View>
    )
  }
}