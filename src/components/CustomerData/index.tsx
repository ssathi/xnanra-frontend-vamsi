import React, { useState, useEffect } from "react";

import { CustomerData } from "../../types";
import { fetchCustomerDataApi } from "../../utils/apiUtils";
import { convertToCamelCase } from "../../utils/commonUtils";

const CustomerDataComponent: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchCustomerData = async () => {
    try {
      const data = await fetchCustomerDataApi();
      setCustomerData(
        data.map((item: CustomerData) => convertToCamelCase(item))
      );
      setLoading(false);
    } catch (error) {
      setError("Error fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!customerData) {
    return null;
  }

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <th rowSpan={2}>Customer ID</th>
          <th colSpan={4}>Pack data</th>
        </tr>
        <tr>
          <th>Ingredient</th>
          <th>Inventory Code</th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {customerData.map((customer) => {
          return (
            <>
              <tr>
                <td rowSpan={customer.packData.length + 1}>
                  {customer.customerId}
                </td>
              </tr>
              {customer.packData.map((pack, index) => (
                <tr key={index}>
                  <td>{pack.ingredient}</td>
                  <td>{pack.inventoryCode}</td>
                  <td>{pack.quantity}</td>
                  <td>{pack.unit}</td>
                </tr>
              ))}
            </>
          );
        })}
      </tbody>
    );
  };

  return (
    <div>
      <table>
        {renderHeader()}
        {renderBody()}
      </table>
    </div>
  );
};

export default CustomerDataComponent;
