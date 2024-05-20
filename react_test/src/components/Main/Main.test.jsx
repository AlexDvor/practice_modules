import { render, fireEvent, screen } from '@testing-library/react';
import Main from './Main';

// eslint-disable-next-line jest/no-disabled-tests
describe('Main', () => {
  it('renders Vite + React title', () => {
    render(<Main />);
    const titleElement = screen.getByText(/Vite \+ React/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders Vite and React logos', () => {
    render(<Main />);
    const viteLogoElement = screen.getByAltText('Vite logo');
    const reactLogoElement = screen.getByAltText('React logo');
    expect(viteLogoElement).toBeInTheDocument();
    expect(reactLogoElement).toBeInTheDocument();
  });

  it('renders initial count', () => {
    render(<Main />);
    const countElement = screen.getByText('count is 0');
    expect(countElement).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<Main />);
    const buttonElement = screen.getByText(/count is 0/i);
    fireEvent.click(buttonElement);
    const countElement = screen.getByText('count is 1');
    expect(countElement).toBeInTheDocument();
  });
});
