import React, { useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PDFContent from './components/PDFContent';

const App: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const generatePDF = async () => {
    if (!selectedType) return;
    
    const content = document.getElementById(selectedType);
    if (content) {
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      const imgWidth = 210; // A4 size width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save(`${selectedType}.pdf`);
    }
  };

  return (
    <div className="App">
      <h1>Select PDF Type</h1>
      <select id="pdf-type" onChange={handleSelectChange}>
        <option value="">-- Select an option --</option>
        <option value="delivery-note">Delivery Note</option>
        <option value="invoice">Invoice</option>
        <option value="receipt">Receipt</option>
        <option value="credit-statement">Credit Statement</option>
        <option value="acknowledgement">Acknowledgement</option>
        <option value="pallet-label">Pallet Label</option>
      </select>
      <button onClick={generatePDF}>Generate PDF</button>

      <div id="preview-section" style={{ marginTop: '20px' }}>
        <h2>Preview</h2>
        <div id="selected-content">
          {selectedType && <PDFContent type={selectedType} />}
        </div>
      </div>
    </div>
  );
};

export default App;

