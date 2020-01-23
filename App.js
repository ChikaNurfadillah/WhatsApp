import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Button, Tab, Tabs, TabHeading, Text, Right, Body, Icon, Badge} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Chat from './screens/chat'
import Camera from './screens/camera'
import Status from './screens/status'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}}>
          <Body>
            <Title style={{fontSize:"25px"}}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon style={{fontSize:"25px"}} name="search"/>
            </Button>
            <Button transparent>
            <Icon style={{fontSize:"25px"}} name="more"/>
            </Button>
          </Right>
        </Header>
        <Tabs >
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}>
            <Icon style={{fontSize:"30px"}} name="camera" /></TabHeading>}>
          <Camera/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>CHAT</Text></TabHeading>}>
          <Chat/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>STATUS</Text></TabHeading>}>
          <Status/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>PANGGILAN</Text></TabHeading>}>
          </Tab>
        </Tabs>
        
      </Container>
    );
  }
}
