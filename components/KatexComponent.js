import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Katex from 'react-native-katex';
import layout from '../constants/Layout';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  katex: {
    flex:1,
    minHeight:layout.window.height*0.50,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    width: layout.window.width,
  },
  title:{
    fontSize:15,
    padding:25
  },
  button:{
    margin:15,
    width:75,height:45,
    backgroundColor:'pink',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
});

const inlineStyle = `
html, body {
  display:flex;
  padding:10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px;
}
.katex {
  display:flex;
  color:black;
  font-size: 4em;
  margin: 0;
}
`;

export default class KatexComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  changeState(){
    console.log('asdsad');
    this.setState({
      open:!this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { step, } = this.props;
    return (
      <ScrollView>
        <View             
        style={styles.katex}
      >
        
        {open && step.is_step ?
          <Katex
            style={styles.katex}
            expression={step.description}
            inlineStyle={inlineStyle}
            displayMode={true}
            throwOnError={true}
            macros={{}}
          /> :
          <Text style={styles.title}>
            {open && !step.is_step ? step.description : step.title}
          </Text>
          }
        <TouchableOpacity style={styles.button} onPressOut={(e) => this.changeState()}>
          <Text>
            {open ? "Gizle" : 'Göster'}
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}
