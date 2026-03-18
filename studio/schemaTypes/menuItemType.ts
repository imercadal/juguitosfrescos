import {defineField, defineType} from 'sanity'

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Ítem del Menú',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {source: 'name'},
      description: 'Segmento del URL que identifica el ítem. Se puede generar automáticamente con el botón a la derecha.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (CLP)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'string',
      description: 'Ingredientes o descripción breve, ej. "Mango, Maracuyá"',
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{type: 'menuCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      description: 'Desmarcar para ocultar este ítem del menú sin eliminarlo',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.nombre',
      media: 'image',
    },
  },
})
