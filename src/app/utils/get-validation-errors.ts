/* eslint-disable @typescript-eslint/no-explicit-any */
interface EndpointErrorMessages {
    [key: string]: {
      [key: number]: string | { [key: string]: string }
    }
  }
 type TypeWithKeys<T> = { [key: string]: T }

  export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKeys<string> = {
      ERR_NETWORK: 'Network error!',
      ERR_TIMEOUT: 'Request timeout!',
      ERR_CANCEL: 'Request cancelled!',
      ERR_UNKNOWN: 'Unknown error!',
    }
  
    return codeMatcher[errorCode]
  }

export const getValidationErrors = (endpoint: string, errorCode: number, errorData: any) => {
    const errorMessages = endpointErrorMessages[endpoint]
  
    if (errorMessages) {
      const errorMessage = errorMessages[errorCode]
  
      if (typeof errorMessage === 'string') {
        return errorMessage
      } else if (errorMessage && typeof errorMessage === 'object') {
        const errorKey = Object.keys(errorMessage).find(key => errorData.message?.includes(key))
        return errorMessage[errorKey ?? Object.keys(errorMessage)[0]]
      }
    }
  }

const endpointErrorMessages: EndpointErrorMessages = {
    signup: {
        400: 'Process invalid, verify undefined or empty values',
        401: {
          'Email exists': 'Email already exists!',
          "emails don't match": 'Emails do not match!',
          "password don't match": 'Passwords do not match!',
          'User has not been created': 'User has not been created!',
          'User was not created': 'User was not created!',
        },
      },
      signin: {
        400: 'The session is active',
        401: {
          'La sesion se encuentra activa': 'The session is active! Try again later',
          'Email invalid': 'Invalid email!',
          'Contraseña invalida': 'Invalid password!',
          'La sesion no fue creada': 'The session was not created',
        },
      },
      signout: {
        500: 'Internal server error',
      },
}