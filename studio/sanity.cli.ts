import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gu1ftuda',
    dataset: 'production'
  },

  deployment: {
    appId: 'a5qczox1ywr61qzqag2ingzm',
    autoUpdates: true
  },
})
