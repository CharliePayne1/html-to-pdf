

import React, { useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFContent from './components/PDFContent';
import { PdfHeader } from './components/PdfHeader';
import { PdfFooter } from './components/PdfFooter';

const App: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedType(value);
  }, []);

  const generatePDF = useCallback(async () => {
    if (!selectedType) {
      console.error('No type selected');
      return;
    }

    const content = document.getElementById(selectedType);
    if (!content) {
      console.error('Selected content not found');
      return;
    }

    try {
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      const imgWidth = 210; // A4 size width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save(`${selectedType}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }, [selectedType]);

  return (
    <div className="App">
      <h1>Select PDF Type</h1>
      <select id="pdf-type" onChange={handleSelectChange} value={selectedType}>
        <option value="">-- Select an option --</option>
        <option value="delivery-note">Delivery Note</option>
        <option value="invoice">Invoice</option>
        <option value="receipt">Receipt</option>
        <option value="credit-statement">Credit Statement</option>
        <option value="acknowledgement">Acknowledgement</option>
      </select>
      <button onClick={generatePDF} disabled={!selectedType}>
        Generate PDF
      </button>

      <div id="preview-section" style={{ marginTop: '20px' }}>
        <h2>Preview</h2>
        <div id="selected-content">
          {selectedType && (
            <>
              <PdfHeader title={'ABC Packsys'} />
              <PDFContent type={selectedType} />
              <PdfFooter />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

