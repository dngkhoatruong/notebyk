// Define the structure of translation keys
export interface TranslationKeys {
  common: {
    save: string
    cancel: string
    delete: string
    edit: string
    add: string
    loading: string
    error: string
    success: string
    confirm: string
    yes: string
    no: string
  }
  categories: {
    workAndStudy: string
    life: string
    healthAndWellbeing: string
  }
  notes: {
    title: string
    newNote: string
    editNote: string
    deleteNote: string
    noteContent: string
    selectCategory: string
    noNotes: string
    createFirstNote: string
    searchNotes: string
    allCategories: string
  }
  navigation: {
    home: string
    newNote: string
    summary: string
    settings: string
  }
  auth: {
    login: string
    logout: string
    email: string
    password: string
    forgotPassword: string
    signUp: string
    welcome: string
  }
  validation: {
    required: string
    invalidEmail: string
    passwordTooShort: string
    confirmPassword: string
    passwordsDoNotMatch: string
  }
}

// Type for available languages
export type Language = 'en' | 'vi'

// Type for translation namespace
export type TranslationNamespace = keyof TranslationKeys
