import { type ToLanguage, type FromLanguage, type TranslatorAction, type TranslatorState } from '../types'
import { AutoLanguage, Language, TranslatorTypes } from '../constants/constants'
import { useReducer } from 'react'

const initialTranslatorState: TranslatorState = {
  fromLanguage: AutoLanguage,
  toLanguage: Language.EN,
  fromText: '',
  result: '',
  loading: false
}

function translatorReducer (state: TranslatorState, action: TranslatorAction): TranslatorState {
  const { type } = action

  if (type === TranslatorTypes.SWAP_LANGUAGES) {
    if (state.fromLanguage === AutoLanguage) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === TranslatorTypes.SET_FROM_LANGUAGE) {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === TranslatorTypes.SET_TO_LANGUAGE) {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === TranslatorTypes.SET_FROM_TEXT) {
    return {
      ...state,
      fromText: action.payload,
      loading: true
    }
  }

  if (type === TranslatorTypes.SET_RESULT) {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return state
}

export const useTranslatorReducer = () => {
  const [translatorState, dispatch] = useReducer(translatorReducer, initialTranslatorState)

  const swapLanguages = () => {
    dispatch({ type: TranslatorTypes.SWAP_LANGUAGES })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: TranslatorTypes.SET_FROM_LANGUAGE, payload })
  }

  const setToLanguage = (payload: ToLanguage) => {
    dispatch({ type: TranslatorTypes.SET_TO_LANGUAGE, payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: TranslatorTypes.SET_FROM_TEXT, payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: TranslatorTypes.SET_RESULT, payload })
  }

  return {
    translatorState,
    swapLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
