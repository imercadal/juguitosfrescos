import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Entrada de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autorx',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {source: 'title'},
      description: 'Segmento del URL que identifica la entrada. Se puede generar automáticamente con el botón a la derecha.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'igUrl',
      title: 'Link a post en ig',
      type: 'string',
    }),
  ],
})