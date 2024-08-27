<template>
  <v-app-bar app theme="dark">
    <v-toolbar-title>Condition Validator</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon
      @click="toggleTheme"
      aria-label="Light or Dark theme"
      :icon="userThemeIcon"
      class="big-icon mr-2"
    ></v-icon>
    <v-btn
      variant="tonal"
      text="Home"
      append-icon="mdi-home"
      href="/"
      size="small"
      class="mr-2"
    ></v-btn>
    <v-btn
      variant="tonal"
      text="About"
      size="small"
      class="mr-2"
      append-icon="mdi-information-outline"
      @click="aboutDialog = true"
    ></v-btn>
    <v-btn
      variant="tonal"
      text="Help"
      size="small"
      append-icon="mdi-help-circle"
      class="mr-6"
      href="/help"
    ></v-btn>
  </v-app-bar>

  <v-dialog v-model="aboutDialog" width="auto">
    <v-card
      min-width="300"
      prepend-icon="mdi-lightbulb-on-outline"
      :text="version"
      title="Condtion Validator"
      subtitle="Version"
    >
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="aboutDialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useTheme } from 'vuetify'

  const version = __APP_VERSION__
  const theme = useTheme()
  const userThemeIcon = ref('')
  const lightThemeIcon = 'mdi-weather-sunny'
  const darkThemeIcon = 'mdi-weather-night'

  const localStorageThemeKey = 'bss-cv-theme'

  const setTheme = (themeName) => {
    localStorage.setItem(localStorageThemeKey, themeName)
    theme.global.name.value = themeName
  }

  const getTheme = () => {
    return localStorage.getItem(localStorageThemeKey)
  }

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem(localStorageThemeKey)
    if (activeTheme === 'light') {
      setTheme('dark')
      userThemeIcon.value = darkThemeIcon
    } else {
      setTheme('light')
      userThemeIcon.value = lightThemeIcon
    }
  }

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (hasDarkPreference) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference()
    theme.global.name.value = initUserTheme
    userThemeIcon.value = initUserTheme === 'dark' ? darkThemeIcon : lightThemeIcon
  })

  // dialogs
  const aboutDialog = ref(false)
</script>
