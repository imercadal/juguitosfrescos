import {defineField, defineType} from 'sanity'

export const flexibleItemType = defineType({
  name: 'flexibleItem',
  title: 'Ítem de la sección A tu gusto',
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
      name: 'precioBase',
      title: 'Precio en agua (CLP)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'precioConLeche',
      title: 'Precio en leche (CLP)',
      type: 'number',
      description: 'Dejar vacío si el ítem no tiene variante con leche',
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.nombre',
      media: 'image',
    },
  },
  
})
