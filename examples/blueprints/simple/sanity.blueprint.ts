import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'simple',
      on: ['publish'],
      filter: '',
      projection: '',
      memory: 2,
      timeout: 30,
    }),
  ],
})
