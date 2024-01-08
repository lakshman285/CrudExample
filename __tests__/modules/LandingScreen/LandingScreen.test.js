import React from 'react';
import renderer from 'react-test-renderer';
import LandingScreen from '../../../src/pages/LandingScreen/LandingScreen';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';
import {request, check} from 'react-native-permissions';

jest.mock('@okta/okta-react-native', () => ({
  isAuthenticated: jest.fn(() => Promise.resolve({authenticated: true})),
}));

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({children}) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({children}) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
      getState: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
    }),
  };
});

describe('Landing Screen Page renders correctly', () => {
  it('Renders the Landing Screen Correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <LandingScreen />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  const navigation = {navigate: () => jest.fn()};

  const test = (
    <NavigationContainer>
      <LandingScreen navigation={navigation} />
    </NavigationContainer>
  );

  it('should render Landing Screen Page for Android', async () => {
    Platform.OS = 'android';
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render Landing Screen Page for IOS', async () => {
    Platform.OS = 'ios';
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render Landing Screen Page for State Change', async () => {
    const hasReturnedFromBackground = true;
    const setHasReturnedFromBackground = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [
        hasReturnedFromBackground,
        setHasReturnedFromBackground,
      ]);
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check android landing page denied permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('denied')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request android landing page denied permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('denied')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check android landing page blocked permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('blocked')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request android landing page blocked permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('blocked')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check android landing page granted permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('granted')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request android landing page granted permission', async () => {
    Platform.OS = 'android';
    check.mockImplementation(() => new Promise(resolve => resolve('granted')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check ios landing page denied permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('denied')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request ios landing page denied permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('denied')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check ios landing page blocked permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('blocked')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request ios landing page blocked permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('blocked')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render check ios landing page granted permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('granted')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render request ios landing page granted permission', async () => {
    Platform.OS = 'ios';
    check.mockImplementation(() => new Promise(resolve => resolve('granted')));
    const wrapper = render(test);
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });   
});
