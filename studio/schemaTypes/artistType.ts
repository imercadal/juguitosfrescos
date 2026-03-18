import { defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artista',
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
        defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Controla el orden en el que se mostrarán los artistas (del 1 hacia adelante)',
    }),
  ],
  orderings: [
    {
      title: 'Orden de visualización',
      name: 'orderAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
})
