import { render, screen } from '@testing-library/react';
import Board from './index';

test('Board will render 24 face down cards', () => {
  render(<Board />);
  const items = screen.getAllByAltText("card face down");
  expect(items).toHaveLength(24);
});

test('There will be 2 set of same cards', () => {
  render(<Board />);
  for(let i=0; i<12; i++) {
    const items = screen.getAllByAltText(`card face up ${i}`);
    expect(items).toHaveLength(2);
  }
});
