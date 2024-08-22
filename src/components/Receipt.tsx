export const Receipt = () => {
    return (<div id="receipt">
        <h1>Receipt</h1>
        <p><strong>Customer:</strong> Alex Brown</p>
        <p><strong>Receipt No:</strong> RCP-67890</p>
        <table >
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Gadget</td>
                <td>1</td>
                <td>$100.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$100.00</td>
            </tr>
        </table>
        <p>Thank you for your purchase!</p>
    </div>)
};