import { projectsData, companyProfileData } from './projects';

export const exportProjectData = () => {
  const exportData = {
    projects: projectsData,
    companyProfile: companyProfileData,
    exportDate: new Date().toISOString(),
    version: '1.0.0'
  };

  const jsonString = JSON.stringify(exportData, null, 2);
  
  // Create and download file
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `excel-marketing-projects-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default exportProjectData;
