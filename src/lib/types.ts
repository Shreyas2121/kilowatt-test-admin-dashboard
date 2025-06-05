export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
}
