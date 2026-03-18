import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Juguitos',

  projectId: 'gu1ftuda',
  dataset: 'production',

  studioHost: 'juguitos',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
