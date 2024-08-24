import React from 'react';

interface PdfHeaderProps {
  logoUrl?: string;
  title: string;
  date?: string;
  reference1Label?: string;
  reference1Value?: string;
  reference2Label?: string;
  reference2Value?: string;
  companyName?: string;
}

export const PdfHeader: React.FC<PdfHeaderProps> = ({
  logoUrl = 'https://via.placeholder.com/100x100.png?text=Logo',
  title,
  date,
  reference1Label,
  reference1Value,
  reference2Label,
  reference2Value,
  companyName = 'Your Company Name',
}) => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.logoSection}>
        <img src={logoUrl} alt="Company Logo" style={styles.logo} />
      </div>
      <div style={styles.infoSection}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.details}>
          {date && (
            <p style={styles.detailItem}>
              <strong>Date:</strong> {date}
            </p>
          )}
          {reference1Label && reference1Value && (
            <p style={styles.detailItem}>
              <strong>{reference1Label}:</strong> {reference1Value}
            </p>
          )}
          {reference2Label && reference2Value && (
            <p style={styles.detailItem}>
              <strong>{reference2Label}:</strong> {reference2Value}
            </p>
          )}
        </div>
      </div>
      <div style={styles.companyNameSection}>
        <p style={styles.companyName}>{companyName}</p>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '2px solid #ddd',
    marginBottom: '20px',
  },
  logoSection: {
    flex: '1',
  },
  logo: {
    width: '80px',
    height: '80px',
  },
  infoSection: {
    flex: '2',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '1.8em',
    margin: '0',
  },
  details: {
    marginTop: '10px',
  },
  detailItem: {
    margin: '0',
    fontSize: '1em',
  },
  companyNameSection: {
    flex: '1',
    textAlign: 'right' as const,
  },
  companyName: {
    fontSize: '1em',
    fontStyle: 'italic' as const,
  },
};
