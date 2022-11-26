import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Facts from './Facts';

describe('Test Facts', () => {
  test('Initial State', async () => {
    render(<Facts />);
    const btn = screen.getByText('New Fact');
    const title = screen.getByText('Facts');
    const fact = await waitFor(() =>
      screen.findByText(/Fact Load in Creator/i)
    );
    expect(btn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(fact).toBeInTheDocument();
  });

  test('Request a new Fact', async () => {
    render(<Facts />);
    const btn = screen.getByText('New Fact');
    userEvent.click(btn);
    const fact = await waitFor(() =>
      screen.findByText(/Fact Load with Button/i)
    );
    expect(btn).toBeInTheDocument();
    expect(fact).toBeInTheDocument();
  });
});
