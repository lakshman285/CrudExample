import {render, waitFor} from '@testing-library/react-native';
import DetailsHeader from '../../src/customWidgets/DetailsHeader/index';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
      getState: jest.fn(),
    }),
  };
});

describe('Details Header component renders correctly', () => {
  it('should render details header', async () => {
    const test = <DetailsHeader headerTitle={'Manifest'} />;
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });
});
