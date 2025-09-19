import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const MockRouter = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('ProjectCard', () => {
  const testProject = projectsData[0]; // Capital Smart City

  it('renders project information correctly', () => {
    render(
      <MockRouter>
        <ProjectCard project={testProject} />
      </MockRouter>
    );

    expect(screen.getByText(testProject.name)).toBeInTheDocument();
    expect(screen.getByText(testProject.location)).toBeInTheDocument();
    expect(screen.getByText(testProject.developer)).toBeInTheDocument();
    expect(screen.getByText('Explore Project')).toBeInTheDocument();
  });

  it('displays correct status badge', () => {
    render(
      <MockRouter>
        <ProjectCard project={testProject} />
      </MockRouter>
    );

    const statusText = testProject.status === 'development' ? 'Under Development' : testProject.status;
    expect(screen.getByText(statusText)).toBeInTheDocument();
  });

  it('shows plot sizes', () => {
    render(
      <MockRouter>
        <ProjectCard project={testProject} />
      </MockRouter>
    );

    // Check that at least some plot sizes are displayed
    const plotSizes = testProject.plot_sizes.slice(0, 3);
    plotSizes.forEach(size => {
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });

  it('has correct link to project detail page', () => {
    render(
      <MockRouter>
        <ProjectCard project={testProject} />
      </MockRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/projects/${testProject.slug}`);
  });
});
