import CvForm from "../components/CvForm";
import PdfPreview from "../components/PdfPreview";

function Curriculum() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <CvForm />
      <PdfPreview />
    </div>
  );
}

export default Curriculum;