import {defineField, defineType} from 'sanity'

export const menuCategoryType = defineType({
  name: 'menuCategory',
  title: 'Categoría del menú',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bajada',
      title: 'Bajada de título',
      type: 'string'
    }),
    defineField({
      name: 'identificador',
      type: 'slug',
      options: {source: 'nombre'},
      description: 'Segmento del URL que identifica el item. Se puede generar automáticamente con el botón a la derecha.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seccion',
      title: 'A tu gusto?',
      type: 'boolean',
      initialValue: false,
      description: 'Selecciona SI cuando esta categoría sea parte de la sección A tu gusto, y no cuando sea parte del menú inferior.'
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Controla el orden en el que se mostrarán los productos (del 1 hacia adelante)',
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
