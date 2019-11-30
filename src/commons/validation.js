import React from 'react';
import {View, Text} from 'react-native';

export const validator = {
  email: {
    rules: [
      {
        test: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
        message: 'Please Enter Valid Email',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  password: {
    rules: [
      {
        test: value => {
          return value.length >= 6;
        },
        message: 'Password can not be < 6 characters',
      },
      {
        test: /^[a-z0-9A-Z_]+$/,
        message: 'Enter Valid Password',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  username: {
    rules: [
      {
        test: /^[a-z0-9A-Z_]+$/,
        message: 'required',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
};

export const formValidators = (fieldName, value) => {
  validator[fieldName].errors = [];
  validator[fieldName].state = value;
  validator[fieldName].valid = true;
  validator[fieldName].rules.forEach(rule => {
    if (rule.test instanceof RegExp) {
      if (!rule.test.test(value)) {
        validator[fieldName].errors.push(rule.message);
        validator[fieldName].valid = false;
      }
    } else if (typeof rule.test === 'function') {
      if (!rule.test(value)) {
        validator[fieldName].errors.push(rule.message);
        validator[fieldName].valid = false;
      }
    }
  });
};

export const validForm = () => {
  let status = true;
  Object.keys(validator).forEach(field => {
    if (field === 'email' || field === 'password') {
      if (!validator[field].valid) {
        status = false;
      }
    }
  });
  return status;
};

export const showErrors = fieldName => {
  const validators = validator[fieldName];
  const result = '';
  if (validators && !validators.valid) {
    const errors = validators.errors.map((info, index) => {
      return (
        <View key={index}>
          <Text>{info}</Text>
        </View>
      );
    });
    return (
      <View>
        <Text style={{color: 'red'}}>{errors}</Text>
      </View>
    );
  }
  return result;
};
