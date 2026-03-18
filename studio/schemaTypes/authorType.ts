import { defineField, defineType } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Autorx',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'avatar',
      title: 'Imagen de perfil',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
