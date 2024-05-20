import { render, fireEvent, screen } from '@testing-library/react';
import Vite from "./Vite"

describe('Vite', () => {
  it('renders Vite + React title', () => {
    render(<Vite/>);
    const titleElement = screen.getByText(/Vite \+ React/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders Vite and React logos', () => {
    render(<Vite/>);
    const viteLogoElement = screen.getByAltText('Vite logo');
    const reactLogoElement = screen.getByAltText('React logo');
    expect(viteLogoElement).toBeInTheDocument();
    expect(reactLogoElement).toBeInTheDocument();
  });

  it('renders initial count', () => {
    render(<Vite/>);
    const countElement = screen.getByText('count is 0');
    expect(countElement).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<Vite/>);
    const buttonElement = screen.getByText(/count is 0/i);
    fireEvent.click(buttonElement);
    const countElement = screen.getByText('count is 1');
    expect(countElement).toBeInTheDocument();
  });
});
