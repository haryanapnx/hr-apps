import React, {useState} from 'react';
import dayjs from 'dayjs';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

class StatusAbsensi extends React.Component {
  state = {
    selected: new Date(),
  };
  onDayPress = day => {
    this.setState({
      selected: day,
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar
          style={styles.calendar}
          current={this.state.selected}
          minDate={'2000-01-01'}
          maxDate={'2030-12-29'}
          firstDay={1}
          markedDates={{
            '2019-11-23': {selected: true, marked: true},
            '2019-11-24': {selected: true, marked: true, dotColor: 'green'},
            '2019-11-25': {marked: true, dotColor: 'red'},
            '2019-11-26': {marked: true},
            '2019-11-27': {disabled: true, activeOpacity: 0},
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default StatusAbsensi;
