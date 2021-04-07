import { IResolvers } from 'graphql-tools';

export const query: IResolvers = {
  Query: {
    hola: (): string => 'Hola mundo1',
    holaConNombre: (_: void, { nombre }: { nombre: string }, ctx: any): string => {
      console.log(ctx);
      return `Hola ${nombre} como estas`;
    },
    holaCurso: (): string => 'Hola mundo desde el curso',
  },
};
