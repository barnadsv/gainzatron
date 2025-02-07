import type { PageServerLoad } from '../$types';

export const load = (async () => {
    return {
        meta: {
            title: 'Contact',
            description: 'Find where to contact us and the best places to reach for more help &info',
        }
    };
}) satisfies PageServerLoad;