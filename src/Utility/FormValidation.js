import Validator from 'validator';

export const FormValidation = ({ fields }) => {
  let passwords = { first: '', second: '' }
  const updatedFields = fields.map((fld) => {
    if (fld.isRequired) {
      if (fld.value === '') return { ...fld, error: fld.errorMsg }
      if (fld.value !== '' && fld.name === 'phone' && !Validator.isMobilePhone(fld.value)) {
        return { ...fld, error: 'Please type a valid phone number' }
      }
      if (fld.value !== '' && fld.name === 'email' && !Validator.isEmail(fld.value)) {
        return { ...fld, error: 'Please type a valid email address' }
      }
      if (fld.value !== '' && (fld.name === 'password' || fld.name === 'repeatPassword') && fld.value.length < 6) {
        return { ...fld, error: 'Password must be more than 6 digits' }
      }
      if (fld.value !== '' && (fld.name === 'password') && fld.value.length >= 6) {
        passwords.first = fld.value
      }
      if (fld.value !== '' && (fld.name === 'repeatPassword') && fld.value.length >= 6) {
        passwords.second = fld.value
      }
      if (fld.value !== '' && (fld.name === 'repeatPassword') && fld.value.length >= 6 && passwords.second !== passwords.first) {
        return { ...fld, error: 'Password not matched' }
      }
      return { ...fld, error: null }
    }
    return { ...fld, error: null }
  })

  return {
    updatedFields,
    isValid: updatedFields.filter(({ error }) => error !== null).length === 0
  }
}
