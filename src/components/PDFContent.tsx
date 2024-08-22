import React from 'react';
import { DeliveryNote } from './DeliveryNote';
import { Invoice } from './Invoice';
import { Receipt } from './Receipt';
import { Acknowledgement } from './Acknowledgement';
import { CreditStatement } from './CreditStatement';

interface PDFContentProps {
    type: string;
}

const PDFContent: React.FC<PDFContentProps> = ({ type }) => {
    switch (type) {
        case 'delivery-note':
            return <DeliveryNote />
        case 'invoice':
            return <Invoice />
        case 'receipt':
            return <Receipt />;
        case 'credit-statement':
            return <CreditStatement />;
        case 'acknowledgement':
            return <Acknowledgement />;
        default:
            return null;
    }
};

export default PDFContent;
