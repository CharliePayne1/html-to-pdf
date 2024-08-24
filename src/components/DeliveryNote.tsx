import React from 'react';

interface DeliveryNoteProps {
  recipientName?: string;
  address?: string;
  items?: { name: string; quantity: number; price: number }[];
  total?: number;
  thankYouMessage?: string;
}

export const DeliveryNote: React.FC<DeliveryNoteProps> = ({
  recipientName = 'John Doe',
  address = '123 Main Street, Cityville',
  items = [
    { name: 'Item 1', quantity: 2, price: 10 },
    { name: 'Item 2', quantity: 1, price: 20 },
  ],
  total = 40,
  thankYouMessage = 'Thank you for your business!',
}) => {
  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const formattedTotal = total !== 40 ? total.toFixed(2) : calculateTotal().toFixed(2);

  return (
    <div id="delivery-note" style={styles.deliveryNoteContainer}>
      <h1 style={styles.header}>Delivery Note</h1>
      <p style={styles.recipientInfo}><strong>Recipient:</strong> {recipientName}</p>
      <p style={styles.recipientInfo}><strong>Address:</strong> {address}</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Item</th>
            <th style={styles.tableHeader}>Quantity</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.name}</td>
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
  deliveryNoteContainer: {
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
  recipientInfo: {
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