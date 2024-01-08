import SignInScreen from '../../../src/pages/SignIn/SignInScreen';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {EventEmitter} from '@okta/okta-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';

jest.mock('@okta/okta-react-native', () => ({
  EventEmitter: {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  },
  createConfig: jest.fn(() => {
    //mock implementation of create config
    return {
      clientId: '0oab12h7kpIS52ZN05d7',
      redirectUri: 'com.okta.dev-10476708:/callback',
      endSessionRedirectUri: 'com.okta.dev-10476708:/',
      discoveryUri: 'https://dev-10476708.okta.com/oauth2/default',
      scopes: [
        'openid',
        'profile',
        'offline_access',
        'email',
        'phone',
        'address',
        'hhn',
      ],
      requireHardwareBackedKeyStore: false,
    };
  }),
  isAuthenticated: jest.fn(() => true),
  signInWithBrowser: jest.fn(() => Promise.resolve({success: true})),
}));

describe('Sign In Screen', () => {
  it('should render Sign In Screen Page', async () => {
    Platform.OS = 'ios';
    const test = (
      <NavigationContainer>
        <SignInScreen navigation={jest.fn()} />
      </NavigationContainer>
    );
    const wrapper = render(test);
    const {getByTestId} = render(test);
    expect(EventEmitter.addListener).toHaveBeenCalledWith(
      'signInSuccess',
      expect.any(Function),
    );
    fireEvent.press(getByTestId('login'));
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });

  it('should render sign in screen page', async () => {
    Platform.OS = 'android';
    const test = (
      <NavigationContainer>
        <SignInScreen navigation={jest.fn()} />
      </NavigationContainer>
    );
    const wrapper = render(test);
    const {getByTestId} = render(test);
    expect(EventEmitter.addListener).toHaveBeenCalledWith(
      'signInSuccess',
      expect.any(Function),
    );
    fireEvent.press(getByTestId('login'));
    await waitFor(() => {
      expect(wrapper).toBeTruthy();
    });
  });
});
