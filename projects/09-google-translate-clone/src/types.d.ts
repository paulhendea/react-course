import { type AutoLanguage, type Language, type TranslatorTypes } from './constants/constants'

export type FromLanguage = Language | AutoLanguage
export type ToLanguage = Language

export type TranslatorAction =
  | { type: TranslatorTypes.SWAP_LANGUAGES }
  | { type: TranslatorTypes.SET_FROM_LANGUAGE, payload: FromLanguage }
  | { type: TranslatorTypes.SET_TO_LANGUAGE, payload: ToLanguage }
  | { type: TranslatorTypes.SET_FROM_TEXT, payload: string }
  | { type: TranslatorTypes.SET_RESULT, payload: string }

export interface TranslatorState {
  fromLanguage: FromLanguage
  toLanguage: ToLanguage
  fromText: string
  result: string
  loading: boolean
}
