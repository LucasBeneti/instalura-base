import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when receives a simple argument', () => {
    it('and it is a string', () => {
      const propToStyleRes = propToStyle('textAlign');
      // <Text textAlignr='center'>
      const componentProps = { textAlign: 'center' }; //string
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    it('and it is a number', () => {
      const propToStyleRes = propToStyle('flex');
      // <Text flex={1}>
      const componentProps = { flex: 1 }; // number
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an argument with breakpoints', () => {
    it('renders only one breakpoint resolution', () => {
      const propToStyleRes = propToStyle('textAlign');
      // <Text textAlignr='center'>
      const componentProps = { textAlign: { xs: 'center' } }; //string
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toMatchSnapshot();
    });

    it('renders two or more breakpoint resolutions', () => {
      const propToStyleRes = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }; //string
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
});
