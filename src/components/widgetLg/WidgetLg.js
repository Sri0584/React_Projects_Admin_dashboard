import "./WidgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widget-button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3>Latest Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-col">
              <img
                className="row-image"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="widget"
              />
              <span>Susan Carol</span>
            </td>
            <td>2 Jun 2021</td>
            <td>$122.00</td>
            <td className="widget-status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="first-col">
              <img
                className="row-image"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="widget"
              />
              <span>Susan Carol</span>
            </td>
            <td>2 Jun 2021</td>
            <td>$234.00</td>
            <td className="widget-status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr>
            <td className="first-col">
              <img
                className="row-image"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="widget"
              />
              <span>Susan Carol</span>
            </td>
            <td>2 Jun 2021</td>
            <td>$390.00</td>
            <td className="widget-status">
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="first-col">
              <img
                className="row-image"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="widget"
              />
              <span>Susan Carol</span>
            </td>
            <td>2 Jun 2021</td>
            <td>$490.00</td>
            <td className="widget-status">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
