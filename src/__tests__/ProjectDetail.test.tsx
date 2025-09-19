import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from '../pages/ProjectDetail';

// Mock the useParams hook
const mockUseParams = { slug: 'capital-smart-city' };
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => mockUseParams,
  };
});

const MockRouter = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('ProjectDetail', () => {
  it('renders project detail page correctly', () => {
    render(
      <MockRouter>
        <ProjectDetail />
      </MockRouter>
    );

    // Check that project name appears
    expect(screen.getByText('Capital Smart City')).toBeDefined();
  });

  it('displays contact information', () => {
    render(
      <MockRouter>
        <ProjectDetail />
      </MockRouter>
    );

    expect(screen.getByText('03348737244')).toBeDefined();
    expect(screen.getByText('excelmarketingpk@gmail.com')).toBeDefined();
  });
});
