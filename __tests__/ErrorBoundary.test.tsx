import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ErrorBoundary from '../src/components/ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe Child</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Safe Child')).toBeInTheDocument();
  });

  it('should display an error message when an error is thrown', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText('Something went wrong. Please try again later.'),
    ).toBeInTheDocument();

    (console.error as unknown as ReturnType<typeof vi.fn>).mockRestore(); // Restore console error log
  });
});
