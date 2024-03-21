import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Adjust this line based on the content in your App component.
  const linkElement = screen.getByText(/learn react/i);
  
  // Use the appropriate assertion based on your component content.
  // For example, you might use:
  expect(linkElement).toBeInTheDocument();
});
