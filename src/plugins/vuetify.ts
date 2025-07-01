import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'


// import { VBtn, VCard, VTextField, VApp, VMain, VNavigationDrawer, VList, VListItem, VIcon,
//   VContainer, VCol, VRow, VDivider, VForm, VSheet
//  } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'

const lightCustom: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#EDEDED",
    drawercolor: "#111A24",
    bgcards: "#F0F0F0",
    cards: "#FAFAFA",
    colortext: "#000000",
    colorcontent: "#5E5E5E",
    coloriconselect: "#303030",
    coloricondefault: "#B0B0B0",
    colortitle: "#003785",
    colortitlehover: "#B3B3B3",
    colorsubtitle: "#004DE6",
    colortitletime: "#08679C",
    test: "#FF0800"
  },
}
const darkCustom: ThemeDefinition = {
  dark: true,
  colors: {
   background: "#181818",
    drawercolor: "#040B14",
    bgcards: "#3D3D3D",
    cards: "#181818",
    colortext: "#FFFFFF",    
    colorcontent: "#C4C4C4",
    coloriconselect: "#EBEBEB",    
    coloricondefault: "#6E6E6E",
    colortitle: "#005BFF",
    colortitlehover: "#040B14",    
    colorsubtitle: "#004DE6",
    colortitletime: "#149DDD",
    test: "#2E62FF"
  },
}

export const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  icons:{
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'lightCustom',
    themes: {
      darkCustom,
      lightCustom,
    },
  },
})
