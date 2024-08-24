import React from 'react';

interface ReceiptProps {
  customerName?: string;
  receiptNo?: string;
  items?: { product: string; quantity: number; price: number }[];
  total?: number;
  thankYouMessage?: string;
}

export const Receipt: React.FC<ReceiptProps> = ({
  customerName = 'Alex Brown',
  receiptNo = 'RCP-67890',
  items = [{ product: 'Gadget', quantity: 1, price: 100 }],
  total = 100,
  thankYouMessage = 'Thank you for your purchase!',
}) => {
  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const formattedTotal = total !== 100 ? total.toFixed(2) : calculateTotal().toFixed(2);

  return (
    <div id="receipt" style={styles.receiptContainer}>
      <h1 style={styles.header}>Receipt</h1>
      <p style={styles.customerInfo}><strong>Customer:</strong> {customerName}</p>
      <p style={styles.customerInfo}><strong>Receipt No:</strong> {receiptNo}</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Product</th>
            <th style={styles.tableHeader}>Quantity</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.product}</td>
              <td style={styles.tableCell}>{item.quantity}</td>
              <td style={styles.tableCell}>${item.price.toFixed(2)}</td>
              <td style={styles.tableCell}>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
          <tr style={styles.totalRow}>
            <td colSpan={3} style={styles.totalLabel}>Total</td>
            <td style={styles.totalValue}>${formattedTotal}</td>
          </tr>
        </tbody>
      </table>
      <p style={styles.thankYouMessage}>{thankYouMessage}</p>
    </div>
  );
};

const styles = {
  receiptContainer: {
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
  customerInfo: {
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
  thankYouMessage: {
    marginTop: '20px',
    fontStyle: 'italic' as const,
  },
};
