import { AsyncStorage, GestureResponderEvent } from "react-native"
import { getJWT } from "../../services/api/auth"
import { logInWithToken } from './../../services/api/user'

export const login = async (formData: LoginForm) => {
  const { email, password } = formData
  const isValid = validateLogin(formData)
  if (isValid !== true) {
    console.error(isValid)
    return null
  }
  const login = await getJWT(email, password)
  if (typeof login !== 'string') return login
  console.error(login);
  return null
}

const validateLogin = (formData: LoginForm) => {
  if (!formData.email) {
    return 'Email is required'
  } else if (!formData.password) {
    return 'Password is required'
  } else if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return 'Email should be in email format'
  }
  return true
}

export const getLastUser = async () => {
  const token = await AsyncStorage.getItem("user");
  if (!token) return null;
  return await logInWithToken(token)
}

export type LoginForm = {
  email: string
  password: string
}

export const loginMock = {
  email: '',
  password: ''
}