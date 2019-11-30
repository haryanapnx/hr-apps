import React from 'react';
import {Item, Label, Button, Text} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from '@ant-design/react-native';
import dayjs from 'dayjs';

const TimePicker = props => {
  const {title, setTime, value, onPress, isShow} = props;
  return (
    <Item stackedLabel>
      <Label>{title}</Label>
      <Button
        style={{justifyContent: 'flex-start'}}
        onPress={onPress}
        block
        transparent
        iconLeft>
        <Icon name="calendar" />
        <Text>{dayjs(value).format('HH:mm')}</Text>
      </Button>
      {isShow && (
        <DateTimePicker
          value={value}
          mode="time"
          is24Hour={true}
          display="clock"
          onChange={setTime}
        />
      )}
    </Item>
  );
};

export default TimePicker;
