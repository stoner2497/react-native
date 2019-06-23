import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Card from './common/Card'
import axios from 'axios'
// import request from 'request'
export default class Albums extends Component {
    constructor (props) {
        super(props);
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
      axios.get('http://rallycoding.herokuapp.com/api/music_albums')
       .then(value => {
           this.setState({albums:value.data})
       })
       .catch(err => console.log(err))
    }

    onRender = () => {
     return   this.state.albums.map(value => <Card key={value.title} >{value.artist} </Card> )
    }



    render() {
        return (
            <View>
                {this.onRender()} 
            </View>
        )
    }
}
