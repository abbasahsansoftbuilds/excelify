import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CompanyProfile from '../pages/CompanyProfile';

const MockRouter = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('CompanyProfile Integration Test', () => {
  it('loads company profile page and shows CEO name', () => {
    render(
      <MockRouter>
        <CompanyProfile />
      </MockRouter>
    );

    // Check that CEO name appears
    const ceoName = screen.getByText('Waheed ur Rehman Farooqui');
    expect(ceoName).toBeDefined();
    
    // Check company name appears
    const companyName = screen.getByText('Excel Marketing Pvt Ltd');
    expect(companyName).toBeDefined();
    
    // Check tagline appears
    const tagline = screen.getByText(/WE DON'T JUST SELL/);
    expect(tagline).toBeDefined();
  });

  it('displays contact information', () => {
    render(
      <MockRouter>
        <CompanyProfile />
      </MockRouter>
    );

    expect(screen.getByText('03348737244')).toBeDefined();
    expect(screen.getByText('excelmarketingpk@gmail.com')).toBeDefined();
  });

  it('shows director information', () => {
    render(
      <MockRouter>
        <CompanyProfile />
      </MockRouter>
    );

    expect(screen.getByText('Qaiser ul Haq')).toBeDefined();
    expect(screen.getByText('Farooq Sultan')).toBeDefined();
    expect(screen.getByText('Ashraf Nazir')).toBeDefined();
    expect(screen.getByText('Abdullah Farooqui')).toBeDefined();
  });
});
