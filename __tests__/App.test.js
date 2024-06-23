import React from 'react';
import { render } from '@testing-library/react-native';
import { CreationScreen } from '../Views/Creation';

test('renders correctly', () => {
  const { getByText } = render(<CreationScreen />);
  const element = getByText('Отправить');
  expect(element).toBeTruthy();
});
