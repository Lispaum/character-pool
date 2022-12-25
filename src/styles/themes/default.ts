export interface ThemeType {
  themeName: string
  backgroundColor: string
  textColor: string
  'fill-A': string
  'fill-B': string
  headerColor: string
}

export const lightTheme = {
  themeName: 'lightTheme',
  backgroundColor: 'whitesmoke',
  textColor: 'black',
  'fill-A': '#E9F3F8',
  'fill-B': '#B9DAEB',
  headerColor: '#2885B3',
}

export const darkTheme = {
  themeName: 'darkTheme',
  backgroundColor: '#1e2021',
  textColor: '#e8e6e3',
  'fill-A': '#202324',
  'fill-B': '#313638',
  headerColor: '#2885B3',
}
