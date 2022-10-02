import { atom, selector, selectorFamily } from 'recoil';

export const stepsAtom = atom({
  key: 'stepsAtoms',
  default: ['Seleciona tu ubicación', 'Datos personales', 'Adjuntar archivos']
});

export const currentStepAtom = atom({
  key: 'currentStepAtoms',
  default: 0
});

export const stepCountSelector = selector({
  key: 'stepCountSelectors',
  get: ({ get }) => get(stepsAtom).length
});

export const currentStepSelector = selector<number>({
  key: 'currentStepSelectors',
  get: ({ get }): number => get(currentStepAtom) as number,
  set: ({ set }, stepNumber) => set(currentStepAtom, stepNumber)
});

export const stepNavigationSelector = selector({
  key: 'stepNavigationSelectors',
  get: ({ get }): { nextStep: string | null; prevStep: string | null } => {
    const steps = get(stepsAtom);
    const currentStep = get(currentStepAtom);
    const stepCount = get(stepCountSelector);

    return {
      nextStep: currentStep < stepCount ? steps[currentStep + 1] : null,
      prevStep: currentStep ? steps[currentStep - 1] : null
    };
  }
});

export const stepSelector = selectorFamily({
  key: 'stepSelectors',
  get:
    (stepKey: number) =>
    ({ get }) =>
      get(stepsAtom)[stepKey]
});
