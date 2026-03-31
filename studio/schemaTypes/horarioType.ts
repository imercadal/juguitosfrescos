import { defineField, defineType } from 'sanity';

export const scheduleType = defineType({
    name: 'horario',
    title: 'Horario',
    type: 'document',
    fields: [
        defineField({
            name: 'cuerpo',
            title: 'Horario de atención',
            type: 'string',
            validation: (rule) => rule.required()
        }),
    ]
})
