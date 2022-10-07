import { Auth } from '@shared';
import { atom, selector } from 'recoil';

export const AuthAtom = atom({
  key: 'auth',
  default: {
    user: {
      jobRole: 'Auxiliar de Recursos Humanos',
      name: 'Juana Mendez'
    },
    isAuthenticated: true
  } as Auth
});

export const AuthSelector = selector<Auth>({
  key: 'AuthSelector',
  get: ({ get }): Auth => get(AuthAtom),
  set: ({ set }, auth) => set(AuthAtom, auth)
});
