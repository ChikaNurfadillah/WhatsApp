import React, {Component} from 'react';
import { Container, Header, Title, Button, Tab, Tabs, Fab, TabHeading, Text, Right, Body, 
  Icon, Content, List, View, ListItem, Thumbnail, Left} from 'native-base';


export default class Chat extends Component{
    constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  render(){
    return (
        <View style={{}}>
            <List>
              <ListItem avatar>
                  <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/499px-Joko_Widodo_2019_official_portrait.jpg' }} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>Jokowi</Text>
                  <Text note>serbasala ky raisa</Text>
                </Body>
                  <Text note>2.08 pm</Text>
              </ListItem>
              <ListItem avatar>
                  <Thumbnail source={{ uri: 'https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg' }} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>Donald Trump</Text>
                  <Text note>Dont talk to me about ww3 again!!</Text>
                </Body>
                  <Text note>2.20 pm</Text>
              </ListItem>
              <ListItem avatar>
                  <Thumbnail source={{ uri: 'https://www.pinterpolitik.com/wp-content/uploads/2018/05/Susilo-Bambang-Yudhoyono-02.jpg' }} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>SBY</Text>
                  <Text note>ADA APA INI?!!?!?!</Text>
                </Body>
                  <Text note>2.55 pm</Text>
              </ListItem>
            </List>
            <Button transparent style={{marginTop:40, marginLeft:600}}>
          <Text style={{color:'black'}} >Diarsipkan (99)</Text>
        </Button>
          </View>
    )
  }
}