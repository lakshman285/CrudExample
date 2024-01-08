export default {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  fetch: () => {
    return Promise.resolve({isConnected: true, isInternetReachable: false});
  },
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
