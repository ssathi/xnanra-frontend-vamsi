export interface PackData {
  ingredient: string;
  inventoryCode: string;
  quantity: number;
  unit: string;
}

export interface CustomerData {
  customerId: number;
  packData: PackData[];
}
