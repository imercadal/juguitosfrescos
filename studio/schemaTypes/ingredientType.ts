import { defineField, defineType } from 'sanity';

export const ingredientType = defineType({
    name: 'ingredient',
    title: 'Ingrediente',
    type: 'document',
    fields: [
        defineField({
            name: 'ingrediente',
            title: 'Ingrediente',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'identificador',
            type: 'slug',
            options: {source: 'ingrediente'},
            description: 'Segmento del URL que identifica el item. Se puede generar automáticamente con el botón a la derecha.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tipo',
            title: 'Tipo',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Fruta (Frutas a elección)', value: 'fruta' },
                    { title: 'Extracto (Extractos sin agua)', value: 'extracto' },
                ],
                layout: 'grid',
            },
            validation: (rule) => rule.required().min(1),
            initialValue: ['fruta'],
        }),
        defineField({
        name: 'available',
        title: 'Disponible',
        type: 'boolean',
        description: 'Desmarcar para ocultar este ítem del menú sin eliminarlo',
        initialValue: true,
        }),
    ]
})