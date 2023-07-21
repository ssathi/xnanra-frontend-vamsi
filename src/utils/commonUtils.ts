import { CustomerData } from "../types";

export const convertToCamelCase = (data: any): CustomerData => {
  const updatedData: CustomerData = {
    customerId: data.customer_id,
    packData: data.pack_data.map((pack: any) => ({
      ingredient: pack.ingredient,
      inventoryCode: pack.inventory_code,
      quantity: pack.quantity,
      unit: pack.unit
    }))
  };

  return updatedData;
};
