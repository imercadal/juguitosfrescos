import { defineField, defineType } from 'sanity';

export const popupType = defineType({
    name: 'popup',
    title: 'Popup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título del Popup',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'identificador',
            type: 'slug',
            options: {source: 'title', maxLength: 96},
            description: 'Segmento del URL que identifica el item. Se puede generar automáticamente con el botón a la derecha.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bajada',
            title: 'Bajada',
            type: 'string',
            validation: (rule) => rule.max(99)
        }),
        defineField({
            name: 'linkText',
            title: 'Texto del Enlace',
            type: 'string'
        }),
        defineField({
            name: 'linkUrl',
            title: 'Enlace',
            description: 'En caso de que el enlace sea a otra parte del sitio web, poner solo lo que viene después del dominio. Ejemplo: www.juguitosfrescos.com/menu -> poner solo /menu',
            type: 'string'
        }),
        defineField({
        name: 'visible',
        title: 'Visible?',
        type: 'boolean',
        description: 'Desmarcar para ocultar el popup. Si aparece un signo de exclamación, revisar que no haya otro popup con visible activado, ya que solo se mostrará uno.',
        initialValue: true,
        validation: (rule) =>
            rule.custom(async (value, context) => {
                if (!value) return true;
                const { document, getClient } = context;
                const client = getClient({ apiVersion: '2024-01-01' });
                const count = await client.fetch<number>(
                    `count(*[_type == "popup" && visible == true && _id != $id])`,
                    { id: document?._id ?? '' }
                );
                if (count > 0) {
                    return 'Advertencia: ya hay otro popup con visible activado. Solo se mostrará solo uno.';
                }
                return true;
            }),
        }),
    ]
})