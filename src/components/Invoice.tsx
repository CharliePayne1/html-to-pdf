export const Invoice = () => {
    return (
        <div id="invoice" >
            <h1>Invoice</h1>
            <p><strong>Client:</strong> Jane Smith</p>
            <p><strong>Invoice No:</strong> INV-12345</p>
            <table>
                <tr>
                    <th>Service</th>
                    <th>Hours</th>
                    <th>Rate</th>
                </tr>
                <tr>
                    <td>Consulting</td>
                    <td>10</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td >$500.00</td>
                </tr>
            </table>
            <p>Please make the payment by the due date.</p>
        </div>
    )
}