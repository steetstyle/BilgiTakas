import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Katex from 'react-native-katex';
import layout from '../constants/Layout';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
const styles = StyleSheet.create({
  katex: {
    display:'flex',
    minHeight: layout.window.height * 0.85,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: layout.window.width,
  },
  title: {
    fontSize: 15,
    padding: 25
  },
  button: {
    top:50,left:50,right:50,bottom:50,
    width: layout.window.width,
    height:layout.window.height,
    
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
  font-size: 2.5em;
  margin: 0;
}
`;


@inject('lessonStore')
@observer
export default class KatexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  changeState() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { step } = this.props;
    return (
      <>
      <ScrollView>
        <View
          style={styles.katex}
        >
        
          <TouchableOpacity onPressOut={(e) => {
            if(this.props.lessonStore.nextStep !== null && this.props.lessonStore.nextStep !== undefined){
              const nextStep = this.props.lessonStore.nextStep;
            this.props.lessonStore.selectStep(this.props.lessonStore.nextStep);
            if (this.props.lessonStore.selectedStep !== null && nextStep !== undefined && nextStep.index < this.props.lessonStore.selectedQuestion.steps.length) {
              this.props.lessonStore.selectNextStep(this.props.lessonStore.selectedQuestion.steps[this.props.lessonStore.selectedStep.index + 1]);
            }
            else {
              this.props.lessonStore.selectNextStep(null);
            }
          }
          }}>
          {step.image !== undefined && step.image !== null && <Image source={{uri:step.image}}/> }
          { step.is_step ?
            <Katex
              style={styles.katex}
              expression={step.description}
              inlineStyle={inlineStyle}
              displayMode={true}
              throwOnError={true}
              macros={{}}
            /> :
            <Text style={styles.title}>
              {step.is_step ? step.description : step.title}
            </Text>
          }
          </TouchableOpacity>
        </View>
      </ScrollView>
      </>
    );
  }
}
