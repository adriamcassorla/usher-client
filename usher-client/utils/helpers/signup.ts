import { createUser } from "../../services/api/auth"
import { useStatusContext } from "../../services/contexts/StatusContext"

export const signup = async (formData: SignupForm) => {
  const { email, password, firstName, lastName } = formData
  const { changeStatus } = useStatusContext()
  const isValid = validateSignup(formData)
  if (isValid !== true) {
    changeStatus('error', isValid);
    return null
  }
  const created = await createUser(email, password, firstName, lastName);
  if (typeof created !== 'string') return created
  changeStatus('error', created);
  return null
}

const validateSignup = (formData: SignupForm) => {
  if (!formData.email) {
    return 'Provide valid email';
  } else if (!formData.password) {
    return 'Password is required'
  } else if (!formData.firstName) {
    return 'First name is required'
  } else if (!formData.lastName) {
    return 'Last name is required';
  } else if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return 'Email should have email format'
  } else if (!formData.password.match(/.{6,}/)) {
    return 'Password must have at least 6 characters'
  }
  return true
}

export type SignupForm = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const signupMock = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}