import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gu1ftuda',
    dataset: 'production'
  },

  deployment: {autoUpdates: true},
})
