import React from 'react';

interface CreditStatementProps {
  creditNo?: string;
  creditDate?: string;
  terms?: string;
  invoiceTo?: {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    county: string;
    postcode: string;
  };
  items?: {
    ourRef: string;
    yourRef: string;
    orderNumber: string;
    description: string;
    creditedInvoice: string;
    deliveryPostcode: string;
    qty: number;
    pricePer1000: string;
    net: string;
    vat: string;
    total: string;
  }[];
  subTotal?: string;
  vatTotal?: string;
  invoiceTotal?: string;
  bankDetails?: {
    bankName: string;
    sortCode: string;
    accountNo: string;
  };
  logoUrl?: string;
  contactEmail?: string;
}

export const CreditStatement: React.FC<CreditStatementProps> = ({
  creditNo = '201686',
  creditDate = '13/05/2022',
  terms = '30 Days',
  invoiceTo = {
    companyName: 'Company 58',
    addressLine1: 'The Address 59',
    city: 'Brandon',
    county: 'Suffolk',
    postcode: '59 59',
  },
  items = [
    {
      ourRef: 'ABC14923/X/01',
      yourRef: 'Ref 2955',
      orderNumber: 'BA 19821',
      description: '475 x 255 x 225 0201 Regular Case Glued',
      creditedInvoice: '22169',
      deliveryPostcode: '200',
      qty: 200,
      pricePer1000: '£472.61',
      net: '£94.52',
      vat: '£18.90',
      total: '£113.42',
    },
  ],
  subTotal = '£94.52',
  vatTotal = '£18.90',
  invoiceTotal = '£113.42',
  bankDetails = {
    bankName: 'Barclays Bank',
    sortCode: '20-62-53',
    accountNo: '93968847',
  },
  logoUrl = 'https://via.placeholder.com/100x100.png?text=ABC',
  contactEmail = 'accounts@abcpack.co.uk',
}) => {
  return (
    <div style={styles.creditStatementContainer} id='credit-note'>
      <div style={styles.headerSection}>
        <img src={logoUrl} alt="Company Logo" style={styles.logo} />
        <div style={styles.creditInfo}>
          <h1 style={styles.header}>Credit Statement</h1>
          <p><strong>Credit No:</strong> {creditNo}</p>
          <p><strong>Credit Date:</strong> {creditDate}</p>
          <p><strong>Terms:</strong> {terms}</p>
          <p style={styles.termsInfo}>Full terms and conditions are available on request.</p>
          <p style={styles.pageInfo}>Page 1 of 1</p>
        </div>
      </div>

      <div style={styles.invoiceToSection}>
        <strong>Invoice To</strong>
        <p>{invoiceTo.companyName}</p>
        <p>{invoiceTo.addressLine1}</p>
        {invoiceTo.addressLine2 && <p>{invoiceTo.addressLine2}</p>}
        <p>{invoiceTo.city}</p>
        <p>{invoiceTo.county}</p>
        <p>{invoiceTo.postcode}</p>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Our Ref</th>
            <th style={styles.tableHeader}>Your Ref</th>
            <th style={styles.tableHeader}>Your Order Number</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Credited Invoice</th>
            <th style={styles.tableHeader}>Delivery Postcode</th>
            <th style={styles.tableHeader}>Qty</th>
            <th style={styles.tableHeader}>Price/1000</th>
            <th style={styles.tableHeader}>Net</th>
            <th style={styles.tableHeader}>VAT</th>
            <th style={styles.tableHeader}>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.ourRef}</td>
              <td style={styles.tableCell}>{item.yourRef}</td>
              <td style={styles.tableCell}>{item.orderNumber}</td>
              <td style={styles.tableCell}>{item.description}</td>
              <td style={styles.tableCell}>{item.creditedInvoice}</td>
              <td style={styles.tableCell}>{item.deliveryPostcode}</td>
              <td style={styles.tableCell}>{item.qty}</td>
              <td style={styles.tableCell}>{item.pricePer1000}</td>
              <td style={styles.tableCell}>{item.net}</td>
              <td style={styles.tableCell}>{item.vat}</td>
              <td style={styles.tableCell}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.totalsSection}>
        <p>Sub Total: {subTotal}</p>
        <p>VAT: {vatTotal}</p>
        <p><strong>Invoice Total: {invoiceTotal}</strong></p>
      </div>

      <div style={styles.contactSection}>
        <p>
          Please direct any queries to: <strong>{contactEmail}</strong>
        </p>
        <div style={styles.bankDetails}>
          <p><strong>Bank Details:</strong></p>
          <p>{bankDetails.bankName}</p>
          <p>Sort Code: {bankDetails.sortCode}</p>
          <p>Account No: {bankDetails.accountNo}</p>
        </div>
      </div>

      <div style={styles.footerSection}>
        <p>THANK YOU FOR YOUR VALUED BUSINESS!</p>
        <p>Anglian Bespoke Corrugated and Packaging Ltd</p>
        <p>Registered office: Unit 8 Home Farm, Norwich Road, Norwich, Norfolk, United Kingdom, NR10 5PQ</p>
        <p>Registered in England and Wales. Registration No: 7974056, VAT Number: 131 5439 36</p>
      </div>
    </div>
  );
};

const styles = {
  creditStatementContainer: {
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
  creditInfo: {
    textAlign: 'right' as const,
  },
  header: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  termsInfo: {
    marginTop: '10px',
    fontStyle: 'italic' as const,
  },
  pageInfo: {
    marginTop: '10px',
    fontStyle: 'italic' as const,
  },
  invoiceToSection: {
    marginBottom: '20px',
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
  totalsSection: {
    marginBottom: '20px',
  },
  contactSection: {
    marginBottom: '20px',
  },
  bankDetails: {
    marginTop: '10px',
  },
  footerSection: {
    marginTop: '20px',
    fontSize: '0.9em',
  },
};
