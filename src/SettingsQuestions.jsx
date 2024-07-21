import { useState } from 'react';
import './SettingsQuestions.css'; // Import your CSS file for styling
import Admission from './office/Admission'; // Adjust path as per your project structure
import Registrar from './office/Registrar'; // Adjust path as per your project structure
import Guidance from './office/Guidance'; // Adjust path as per your project structure
import HealthService from './office/HealthService'; // Adjust path as per your project structure
import Library from './office/Library'; // Adjust path as per your project structure
import Scholarship from './office/Scholarship'; // Adjust path as per your project structure
import SportsandCultural from './office/SportsandCultural'; // Adjust path as per your project structure
import StudentOrg from './office/StudentOrg'; // Adjust path as per your project structure
import StudentPub from './office/StudentPub'; // Adjust path as per your project structure
import Canteen from './office/Canteen'; // Adjust path as per your project structure
import SaveIcon from './icons/icons8-save-24.png';
//import EditIcon from './icons/icons8-edit-24 (2).png';
//import SaveIconHover from './icons/icons8-save-24 (1).png';
//import EditIconHover from './icons/icons8-edit-24 (3).png';

function SettingsQuestions() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
  };

  const handleSaveClick = () => {
    // Implement save functionality here
    console.log('Save button clicked!');
  };

  const renderOfficeComponent = () => {
    switch (selectedOffice) {
      case 'Admission Office':
        return <Admission />;
      case 'Registrar Office':
        return <Registrar />;
      case 'Guidance Office':
        return <Guidance />;
      case 'Health Service Office':
        return <HealthService />;
      case 'Library':
        return <Library />;
      case 'Scholarship Programs':
        return <Scholarship />;
      case 'Sports and Cultural Services':
        return <SportsandCultural />;
      case 'Student Organization':
        return <StudentOrg />;
      case 'Student Publication':
        return <StudentPub />;
      case 'Canteen (Food Service)':
        return <Canteen />;
      // Add cases for other offices as needed
      default:
        return null;
    }
  };

  const offices = [
    'Admission Office', 'Registrar Office', 'Guidance Office', 'Health Service Office', 
    'Library', 'Canteen (Food Service)', 'Student Publication', 'Scholarship Programs', 
    'Student Organization', 'Sports and Cultural Services'
  ];

  return (
    <div className="settings-questions-container">
      {/* Navigation container styled as a table */}
      <div className="nav-container">
        <h3>Select Office to Edit Question</h3>
        <table className="office-table">
          <tbody>
            {offices.map((office, index) => (
              <tr key={index}>
                <td className={selectedOffice === office ? 'active' : ''} onClick={() => handleOfficeClick(office)}>
                  {office}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Container for displaying selected office questions */}
      <div className="questions-container">
        <div className="questions-header">
          <h3>{selectedOffice ? `${selectedOffice}` : ''}</h3>
          {selectedOffice && (
            <button onClick={handleSaveClick} className="save-button">
              <img src={SaveIcon} alt="Save" style={{ width: '25px', height: '25px' }} />
            </button>
          )}
        </div>
        <div className="questions-list">
          {renderOfficeComponent()}
        </div>
      </div>
    </div>
  );
}

export default SettingsQuestions;
