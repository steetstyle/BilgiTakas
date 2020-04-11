import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { observer, inject } from 'mobx-react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MathJax from 'react-native-mathjax';

import Modal from 'react-native-modalbox';
import styles from './styles';


@inject('lessonStore')
@observer
class HomeContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
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
    if (index === this.state.activeIndex) {
      shadowStyle = {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }
    }

    return (
      <View style={{

        backgroundColor: '#2f95dc',
        borderRadius: 35,
        height: 200,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20,
        marginTop: 20,
        ...shadowStyle
      }}>
        <Text style={{ fontSize: 20, color:'white' }}>{item.title}</Text>
        <Text style={{ color:'white' }}>{item.text}</Text>
      </View>

    )
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props.lessonStore;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
        <ScrollView contentContainerStyle={{ backgroundColor: 'transparent' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <Carousel
              layout={"tinder"}
              ref={ref => this.carousel = ref}
              data={items}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem.bind(this)}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
          </View>
          {Array.isArray(items) && items.length > 0 && items[activeIndex].categories !== undefined && Array.isArray(items[activeIndex].categories) && items[activeIndex].categories.map((category, index) => {
            return <TouchableOpacity key={index} onPress={() => {
              this.props.lessonStore.selectLesson(category);
              this.props.navigation.navigate('Lesson');
            }} style={{
              
              backgroundColor: '#2f95dc',
              borderRadius: 35,
              height: 75,
              padding: 25,
              marginTop: 10,
              marginLeft: 25,
              marginRight: 25,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'black'
            }}>
              <Text style={{ fontSize: 20, color:'white' }}>{category.title}</Text>
            </TouchableOpacity>
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;