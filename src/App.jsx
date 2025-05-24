// App.jsx

import { PDFViewer } from '@react-pdf/renderer';
import StudentReportPDF from './Components/StudentReportPDF ';
import studentData from './Data/StudentData';
import ReportPage from './Components/ReportPage ';

const App = () => {
  return (
    <ReportPage/>
  );
};

export default App;
