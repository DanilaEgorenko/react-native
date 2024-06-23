import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('navigates between tabs correctly', async () => {
  const { getByText, findByText } = render(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );

  expect(getByText('Expected Text in CreationScreen')).toBeTruthy();

  const listTab = getByText('Список');
  fireEvent.press(listTab);
  expect(await findByText('Expected Text in ListScreen')).toBeTruthy();
});
