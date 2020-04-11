import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import KatexComponent from '../../components/KatexComponent';

import Modal from 'react-native-modalbox';
import styles from './styles';


@inject('lessonStore')
@observer
class LessonContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      activeStep:-1,
    }
  }


  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }


  componentDidMount() {
    this.props.lessonStore.fetchItems();
  }

  _renderItem({ item, index }) {
    let shadowStyle = {};
    if(index === this.state.activeIndex){
      shadowStyle = {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        elevation:  5,
      }
    }
   
    return (
      <View style={{
        backgroundColor: 'white',
        borderRadius: 35,
        height: 200,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
        marginBottom:20,
        marginTop:20,
        ...shadowStyle
      }}>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }

  render() {
    const { activeIndex } = this.state;
    const { selectedLesson, selectedQuestion, selectedStep } = this.props.lessonStore;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
        <ScrollView contentContainerStyle={{backgroundColor:'transparent'}}>
          { selectedLesson !== null && Array.isArray(selectedLesson.questions) && selectedLesson.questions.map((question,index) => {
            return <><TouchableOpacity key={index} onPress={() => {
              this.props.lessonStore.selectQuestion(question);
            }} style={{
              backgroundColor: '#2f95dc',
              borderRadius: 10,
              height: 75,
              padding: 25,
              marginTop:25,
              marginLeft: 25,
              marginRight: 25,
              borderWidth:0,
              borderBottomWidth:1,
              borderBottomColor:'black'
            }}>
              <Text style={{ fontSize: 25, color:'white' }}>{question.title}</Text>
            </TouchableOpacity>
            {selectedQuestion !== null && selectedQuestion === question && Array.isArray(selectedQuestion.steps) && selectedQuestion.steps.map((step, index) => {
                    return <TouchableOpacity key={index} onPress={() => {
                      this.refs.modal4.open();
                      this.props.lessonStore.selectStep(step);
                      this.props.lessonStore.selectNextStep(selectedQuestion.steps[index+1]);
                    }} style={{
                      backgroundColor: 'white',
                      borderRadius: 35,
                      height: 30,
                      padding: 20,
                      flex:1,
                      alignSelf:'flex-end',
                      marginTop:10,
                      marginLeft: 25,
                      marginRight: 25,
                      borderWidth:0,
                      borderBottomWidth:1,
                      borderBottomColor:'black'
                    }}>
                      <Text>
                        {step.extra_title}
                      </Text>
                      </TouchableOpacity>;
              })}</>
            
          })}
        </ScrollView>
        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          {selectedStep !== null && selectedStep !== undefined && <KatexComponent step={selectedStep}/> }
        </Modal>
      </SafeAreaView>
    );
  }
}




export default LessonContainer;