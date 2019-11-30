import {Alert} from 'react-native';
import axios from 'axios';
import {URL} from './config';

export const apiCall = ({method, url, data = ''}) => async dispatch => {
  try {
    const response = await axios({
      method: method,
      url: URL + url,
      data: data.data || '',
      headers: data.headers || '',
      params: data.params || '',
      timeout: data.timeout || 0,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      if (error.response.status !== 400) {
        if (data.statusCode) {
          dispatch(Alert.alert('Info', data.message));
        } else {
          dispatch(
            Alert.alert(
              'Info',
              'Maaf sedang terjadi masalah. Mohon tunggu beberapa menit lagi 🙏',
            ),
          );
        }
      } else {
        dispatch(
          Alert.alert(
            'Info',
            'Maaf sedang terjadi masalah. Mohon tunggu beberapa menit lagi 🙏',
          ),
        );
      }
    } else {
      dispatch(
        Alert.alert(
          'Info',
          'Maaf sedang terjadi masalah. Mohon tunggu beberapa menit lagi 🙏',
        ),
      );
    }
    dispatch(console.error(error));
    throw error;
  }
};
