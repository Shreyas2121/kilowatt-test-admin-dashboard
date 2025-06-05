import { faker } from "@faker-js/faker";
import type { Order } from "./types";

// Generate mock orders
export const generateMockOrders = (count: number): Order[] => {
  const statuses = ["Pending", "Shipped", "Delivered", "Cancelled"] as const;
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    customer: faker.person.fullName(),
    amount: Number(faker.commerce.price({ min: 500, max: 5000 })),
    date: faker.date.recent({ days: 30 }).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status: faker.helpers.arrayElement(statuses),
  }));
};
