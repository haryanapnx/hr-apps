import axios from "axios"
import Config from 'react-native-config'

// import getConfig from "next/config"
// const { publicRuntimeConfig } = getConfig()
// const { API_URL, APP_KEY, APP_SECRET } = publicRuntimeConfig

// const API_URL = Config.AUTH_API_URL;
// const APP_KEY = Config.App_Key;
// const APP_SECRET = Config.App_Secret;

const API_URL = 'http://api.pigibro.xyz';
const APP_KEY = '96056ca15407c4f072323d186312ba96';
const APP_SECRET = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBsaWNhdGlvbiI6ImRldmVsb3BtZW50IiwiZW1haWwiOiJpbmZvQHBpZ2lqby5jb20iLCJhcHBfa2V5IjoiOTYwNTZjYTE1NDA3YzRmMDcyMzIzZDE4NjMxMmJhOTYifQ.EJRk3i3SGp9JTRmiEpR2Gd7EAX2MSvrlMBe244X3Y4s';
const GUEST_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTM0MywibG9naW4iOmZhbHNlfQ.U68EAZtQHg9hE1LXZm_HdS52K8nHCxfQBF9-njbLfYo'

export const apiBlogUrl = "https://blog.pigijo.com";
export const apiMasSurya = "http://159.89.202.139:8054";
export const apiUrl = API_URL;

const appHeaderProperties = {
  "App-key" : APP_KEY,
  "App-secret" : APP_SECRET,
  "Guest-Token": GUEST_TOKEN
}

export const apiCall = async ({ method, url, data = "", baseURL }) => {
  let head = {
    ...appHeaderProperties,
    ...data.headers,
  };
  // console.log(data.data, 'header')
  try {
    const response = await axios({
      baseURL: baseURL || API_URL,
      method: method,
      url: url,
      data: data.data || "",
      headers: head || "",
      params: data.params || "",
      timeout: data.timeout || 0
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      // if (get(data,'meta.message')){
      //   dispatch(setErrorMessage(get(data,'meta.message')));
      // }else{
      //   dispatch(
      //     setErrorMessage(
      //       "Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏"
      //     )
      //   );
      // }
      return data;
    } else {
      // dispatch(
      //   setErrorMessage(
      //     "Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏"
      //   )
      // );
    }
    return null;
  }
};