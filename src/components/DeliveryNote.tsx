export const DeliveryNote = () => {
    return (<div id="delivery-note">
        <h1>Delivery Note</h1>
        <p><strong>Recipient:</strong> John Doe</p>
        <p><strong>Address:</strong> 123 Main Street, Cityville</p>
        <table>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Item 1</td>
                <td>2</td>
                <td>$10.00</td>
            </tr>
            <tr>
                <td>Item 2</td>
                <td>1</td>
                <td>$20.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td >$40.00</td>
            </tr>
        </table>
        <p>Thank you for your business!</p>
    </div>)
}