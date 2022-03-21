import { FormEvent } from "react"
import { GestureResponderEvent } from "react-native"

export const loginHandler = ( event: GestureResponderEvent, formData: LoginForm, setFormErrors: React.Dispatch<React.SetStateAction<loginForm>>) => {
  validateLogin(formData, setFormErrors) ? console.log('Working fine') : console.log('Incorrect data')
}

const validateLogin = (formData: LoginForm, setFormErrors: React.Dispatch<React.SetStateAction<LoginForm>>) => {
  if (!formData.email) {
    setFormErrors((formErrors) => { 
      return {...formErrors,
      email: 'Email is required'
      }
    })
    return false;
  } else if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    setFormErrors((formErrors) => { 
      return {...formErrors,
      email: 'Insert a valid email'
      }
    })
    return false
  }
  return true
}

export type LoginForm = {
  email: string
  password: string
}