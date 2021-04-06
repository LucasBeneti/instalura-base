/* eslint-disable */
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

describe('useForm()', () => {
  describe('when user types', () => {
    it('change values', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            nome: 'lucas',
          },
        }),
      );

      const expectedInitialValues = { nome: 'lucas' };
      expect(result.current.values).toEqual(expectedInitialValues);
      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'thiele',
        },
      };
      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.values).toEqual({ nome: 'thiele' });
    });
  });
});
