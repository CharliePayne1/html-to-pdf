import React from 'react';

interface InvoiceProps {
  clientName?: string;
  invoiceNo?: string;
  services?: { name: string; hours: number; rate: number }[];
  total?: number;
  dueDateMessage?: string;
}

export const Invoice: React.FC<InvoiceProps> = ({
  clientName = 'Jane Smith',
  invoiceNo = 'INV-12345',
  services = [{ name: 'Consulting', hours: 10, rate: 50 }],
  total = 500,
  dueDateMessage = 'Please make the payment by the due date.',
}) => {
  const calculateTotal = () => {
    return services.reduce((acc, service) => acc + service.hours * service.rate, 0);
  };

  const formattedTotal = total !== 500 ? total.toFixed(2) : calculateTotal().toFixed(2);

  return (
    <div id="invoice" style={styles.invoiceContainer}>
      <h1 style={styles.header}>Invoice</h1>
      <p style={styles.clientInfo}><strong>Client:</strong> {clientName}</p>
      <p style={styles.clientInfo}><strong>Invoice No:</strong> {invoiceNo}</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Service</th>
            <th style={styles.tableHeader}>Hours</th>
            <th style={styles.tableHeader}>Rate</th>
            <th style={styles.tableHeader}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{service.name}</td>
              <td style={styles.tableCell}>{service.hours}</td>
              <td style={styles.tableCell}>${service.rate.toFixed(2)}</td>
              <td style={styles.tableCell}>${(service.hours * service.rate).toFixed(2)}</td>
            </tr>
          ))}
          <tr style={styles.totalRow}>
            <td colSpan={3} style={styles.totalLabel}>Total</td>
            <td style={styles.totalValue}>${formattedTotal}</td>
          </tr>
        </tbody>
      </table>
      <p style={styles.dueDateMessage}>{dueDateMessage}</p>
    </div>
  );
};

const styles = {
  invoiceContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    border: '1px solid #ddd',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    fontSize: '2em',
    marginBottom: '20px',
  },
  clientInfo: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '20px',
  },
  tableHeader: {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left' as const,
    backgroundColor: '#f9f9f9',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left' as const,
  },
  totalRow: {
    fontWeight: 'bold' as const,
  },
  totalLabel: {
    textAlign: 'right' as const,
    paddingRight: '10px',
  },
  totalValue: {
    paddingRight: '10px',
  },
  dueDateMessage: {
    marginTop: '20px',
    fontStyle: 'italic' as const,
  },
};
