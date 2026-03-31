import { defineField, defineType } from 'sanity';

export const bannerType = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'body',
            title: 'Texto del Banner',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'buttonText',
            title: 'Texto del Botón',
            type: 'string'
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Enlace del Botón',
            type: 'string',
            description: 'En caso de que el enlace sea a otra parte del sitio web, poner solo lo que viene después del dominio. Ejemplo: www.juguitosfrescos.com/menu -> poner solo /menu',
        }),
        defineField({
            name: 'visible',
            title: 'Visible?',
            type: 'boolean',
            description: 'Desmarcar para ocultar el banner. Si aparece un signo de exclamación, revisar que no haya otro banner con visible activado, ya que solo se mostrará uno.',
            initialValue: true,
            validation: (rule) =>
                rule.custom(async (value, context) => {
                    if (!value) return true;
                    const { document, getClient } = context;
                    const client = getClient({ apiVersion: '2024-01-01' });
                    const count = await client.fetch<number>(
                        `count(*[_type == "banner" && visible == true && _id != $id])`,
                        { id: document?._id ?? '' }
                    );
                    if (count > 0) {
                        return 'Advertencia: ya hay otro banner con visible activado. Solo se mostrará uno.';
                    }
                    return true;
                }),
        }),
    ]
})
