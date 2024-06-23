import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CreationScreen } from '../Views/Creation';

test('creation process works correctly', async () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<CreationScreen />);

  // Simulate user input
  const input = getByPlaceholderText('Введите URL');
  fireEvent.changeText(input, 'https://jsonplaceholder.typicode.com/posts');

  // Simulate form submission
  const submitButton = getByText('Отправить');
  fireEvent.press(submitButton);

  // Verify the result
  await waitFor(() => {
    expect(queryByText('New Item')).toBeTruthy();
  });
});
