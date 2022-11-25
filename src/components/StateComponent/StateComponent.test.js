import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import StateComponent from './StateComponent';
import userEvent from '@testing-library/user-event';

describe('Test State Component', () => {
  test('Test Components Present', () => {
    render(<StateComponent />);
    const btn = screen.getByText('Action');
    const title = screen.getByText('Component Test 1');
    expect(btn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Test State Change', async () => {
    render(<StateComponent />);
    const btn = screen.getByText('Action');
    //fireEvent.click(btn, { click: 2 });
    userEvent.dblClick(btn);
    const component = await waitFor(() => screen.findByText('Counter:2'));
    expect(component).toBeInTheDocument();
  });
});
