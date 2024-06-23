const mockAsyncStorage = {
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
  setItem: jest.fn((key, value) => {
    return new Promise((resolve) => {
      resolve(value);
    });
  }),
  removeItem: jest.fn((key) => {
    return new Promise((resolve) => {
      resolve();
    });
  }),
  clear: jest.fn(() => {
    return new Promise((resolve) => {
      resolve();
    });
  }),
  getAllKeys: jest.fn(() => {
    return new Promise((resolve) => {
      resolve([]);
    });
  }),
};

export default mockAsyncStorage;
