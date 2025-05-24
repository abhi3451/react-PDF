import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import StudentPDF from "./StudentPDF";
import studentData from '../Data/StudentData';

const ReportPage = () => {
  const studentId = 594;

  const selectedStudent = studentData.find(student => student.student_id === studentId);

  return(
  <>
    <PDFDownloadLink
      document={<StudentPDF data={selectedStudent} />}
      fileName="student_report.pdf"
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
    </PDFDownloadLink>

    <PDFViewer width="100%" height="1000">
      <StudentPDF data={selectedStudent} />
    </PDFViewer>
  </>)
};

export default ReportPage;
