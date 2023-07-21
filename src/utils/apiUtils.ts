import axios from "axios";

import { CustomerData } from "../types";

export const fetchCustomerDataApi = async (): Promise<CustomerData[]> => {
  const response = await axios.get<CustomerData[]>(
    "https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1"
  );
  return response.data;
};
