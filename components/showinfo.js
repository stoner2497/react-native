import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Card from './common/Card';
import CardSection from './common/CardSection'
export default class showinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            showContactInfo:false
        }
    }
   
    
    onShow = () => {
        this.setState({showContactInfo:!this.state.showContactInfo});
        
    }
    // onShow() {
    //     this.setState({showContactInfo:!this.state.showContactInfo});
    // }       
    render() {
        const Myicons  =   <Icons name="angle-down" size={30}  />;
        return (
            <View>
              <Card >
              <CardSection>
              <Text>Name:Sahil</Text>
              <TouchableOpacity  onPress={this.onShow}>
                {Myicons}
              </TouchableOpacity>
              </CardSection>
              <CardSection >
              {this.state.showContactInfo ? (<View><Text>Contact:797703808</Text>
              <Text>email:7977038084</Text></View>) : null }      
            </CardSection>      
            </Card> 
            <Card >
              <CardSection>
              <Text>Name:Sahil</Text>
              <TouchableOpacity  onPress={this.onShow}>
                {Myicons}
              </TouchableOpacity>
              </CardSection>
              <CardSection >
              {this.state.showContactInfo ? (<View><Text>Contact:797703808</Text>
              <Text>email:7977038084</Text></View>) : null }      
            </CardSection>      
            </Card> 
            <Card >
              <CardSection>
              <Text>Name:Sahil</Text>
              <TouchableOpacity  onPress={this.onShow}>
                {Myicons}
              </TouchableOpacity>
              </CardSection>
              <CardSection >
              {this.state.showContactInfo ? (<View><Text>Contact:797703808</Text>
              <Text>email:7977038084</Text></View>) : null }      
            </CardSection>      
            </Card> 
            <Card >
              <CardSection>
              <Text>Name:Sahil</Text>
              <TouchableOpacity  onPress={this.onShow}>
                {Myicons}
              </TouchableOpacity>
              </CardSection>
              <CardSection >
              {this.state.showContactInfo ? (<View><Text>Contact:797703808</Text>
              <Text>email:7977038084</Text></View>) : null }      
            </CardSection>      
            </Card>            
            </View>
        )
    }
    
}
