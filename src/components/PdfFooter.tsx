import React from 'react';

interface PdfFooterProps {
  companyName?: string;
  companyAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  footerNote?: string;
}

export const PdfFooter: React.FC<PdfFooterProps> = ({
  companyName = 'Your Company Name',
  companyAddress = '123 Main Street, Cityville, Country, ZIP',
  contactEmail = 'info@company.com',
  contactPhone = '+123 456 7890',
  footerNote = 'Thank you for your business!',
}) => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.contactSection}>
        <p style={styles.contactItem}>
          <strong>Contact Email:</strong> {contactEmail}
        </p>
        <p style={styles.contactItem}>
          <strong>Contact Phone:</strong> {contactPhone}
        </p>
      </div>
      <div style={styles.companySection}>
        <p style={styles.companyName}>{companyName}</p>
        <p style={styles.companyAddress}>{companyAddress}</p>
      </div>
      <div style={styles.footerNoteSection}>
        <p style={styles.footerNote}>{footerNote}</p>
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    padding: '20px',
    borderTop: '2px solid #ddd',
    marginTop: '20px',
    textAlign: 'center' as const,
  },
  contactSection: {
    marginBottom: '10px',
  },
  contactItem: {
    margin: '5px 0',
    fontSize: '1em',
  },
  companySection: {
    marginBottom: '10px',
  },
  companyName: {
    fontSize: '1.2em',
    fontWeight: 'bold' as const,
  },
  companyAddress: {
    fontSize: '1em',
    margin: '5px 0',
  },
  footerNoteSection: {
    marginTop: '10px',
    fontSize: '1em',
    fontStyle: 'italic' as const,
  },
  footerNote: {
    margin: '5px 0',
  },
};
