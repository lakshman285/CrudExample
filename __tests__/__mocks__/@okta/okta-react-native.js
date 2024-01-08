export default {
  EventEmitter: {
    addListener: jest.fn(),
  },
  removeListeners: jest.fn(),
  isAuthenticated: () => {
    return Promise.resolve(true);
  },
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
