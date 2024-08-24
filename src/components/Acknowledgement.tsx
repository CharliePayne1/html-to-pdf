import React from 'react';

interface AcknowledgementProps {
  date?: string;
  customerOrderNo?: string;
  companyOrderNo?: string;
  deliveryDate?: string;
  customer?: {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    county: string;
    postcode: string;
  };
  deliverTo?: {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    county: string;
    postcode: string;
  };
  items?: {
    specNo: string;
    ref: string;
    description: string;
    material: string;
    print: string;
    qty: number;
    pricePer1000: string;
    priceEach: string;
  }[];
  logoUrl?: string;
}

export const Acknowledgement: React.FC<AcknowledgementProps> = ({
  date = '13/05/2022',
  customerOrderNo = '2X Stubbs mug box',
  companyOrderNo = '15863',
  deliveryDate = '01/06/2022',
  customer = {
    companyName: 'Company 529',
    addressLine1: 'The Address 652',
    city: '652',
    county: '652',
    postcode: '652 652',
  },
  deliverTo = {
    companyName: 'Company 529',
    addressLine1: 'The Address 673',
    city: 'Scottow',
    county: 'Norfolk',
    postcode: '673 673',
  },
  items = [
    {
      specNo: '19202/A/01',
      ref: 'Ref 7245',
      description: '220 x 80 x 88 0713 crashlock glued tuck in lid Glued',
      material: '180Y/150W E FLUTE',
      print: '1',
      qty: 5000,
      pricePer1000: '£530.00',
      priceEach: '£0.53',
    },
    {
      specNo: '19202/A/01',
      ref: 'Ref 7245',
      description: '1x colour 280c printing stereo',
      material: '180Y/150W E FLUTE',
      print: '1',
      qty: 1,
      pricePer1000: '£0.00',
      priceEach: '£0.00',
    },
    {
      specNo: '19202/A/01',
      ref: 'Ref 7245',
      description: 'Die cut tooling',
      material: '180Y/150W E FLUTE',
      print: '1',
      qty: 1,
      pricePer1000: '£0.00',
      priceEach: '£0.00',
    },
  ],
  logoUrl = 'https://via.placeholder.com/100x100.png?text=ABC',
}) => {
  return (
    <div style={styles.acknowledgementContainer} id='acknowledgement'>
      <div style={styles.headerSection}>
        <img src={logoUrl} alt="Company Logo" style={styles.logo} />
        <div style={styles.acknowledgementInfo}>
          <h1 style={styles.header}>Acknowledgment</h1>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Your Order No:</strong> {customerOrderNo}</p>
          <p><strong>Our Order No:</strong> {companyOrderNo}</p>
          <p><strong>Delivery Date:</strong> {deliveryDate}</p>
        </div>
      </div>

      <div style={styles.customerDeliverySection}>
        <div style={styles.customerInfo}>
          <strong>Customer</strong>
          <p>{customer.companyName}</p>
          <p>{customer.addressLine1}</p>
          {customer.addressLine2 && <p>{customer.addressLine2}</p>}
          <p>{customer.city}</p>
          <p>{customer.county}</p>
          <p>{customer.postcode}</p>
        </div>
        <div style={styles.deliveryInfo}>
          <strong>Deliver To</strong>
          <p>{deliverTo.companyName}</p>
          <p>{deliverTo.addressLine1}</p>
          {deliverTo.addressLine2 && <p>{deliverTo.addressLine2}</p>}
          <p>{deliverTo.city}</p>
          <p>{deliverTo.county}</p>
          <p>{deliverTo.postcode}</p>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Spec No</th>
            <th style={styles.tableHeader}>Ref</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Material</th>
            <th style={styles.tableHeader}>Print</th>
            <th style={styles.tableHeader}>Qty</th>
            <th style={styles.tableHeader}>Price Per 1000</th>
            <th style={styles.tableHeader}>Price Each</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.specNo}</td>
              <td style={styles.tableCell}>{item.ref}</td>
              <td style={styles.tableCell}>{item.description}</td>
              <td style={styles.tableCell}>{item.material}</td>
              <td style={styles.tableCell}>{item.print}</td>
              <td style={styles.tableCell}>{item.qty}</td>
              <td style={styles.tableCell}>{item.pricePer1000}</td>
              <td style={styles.tableCell}>{item.priceEach}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.footerSection}>
        <p style={styles.termsInfo}>
          All artwork, stereos and cutting formes are charged separately.<br />
          Quantities quoted are subject to a manufacturing tolerance of +/- 10%<br />
          Prices quoted are based on a single drop unless otherwise stated.
        </p>

        <p style={styles.companyInfo}>
          Anglian Bespoke Corrugated and Packaging Ltd<br />
          Registered office: Unit 8 Home Farm, Norwich Road, Norwich, Norfolk, United Kingdom, NR10 5PQ<br />
          Registered in England and Wales Registration No: 7974056 VAT Registration: 131543936
        </p>
      </div>
    </div>
  );
};

const styles = {
  acknowledgementContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    border: '1px solid #ddd',
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  acknowledgementInfo: {
    textAlign: 'right' as const,
  },
  header: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  customerDeliverySection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  customerInfo: {
    flex: 1,
    marginRight: '20px',
  },
  deliveryInfo: {
    flex: 1,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: '20px',
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
  },
  footerSection: {
    marginTop: '20px',
  },
  termsInfo: {
    marginBottom: '10px',
    fontSize: '0.9em',
    fontStyle: 'italic' as const,
  },
  companyInfo: {
    fontSize: '0.9em',
  },
};
