import { DeliveryClient } from "@kentico/kontent-delivery";
require("dotenv").config({
  path: `../.env`,
})
export const deliveryClient = new DeliveryClient({
  // Tip: Use your own sample project ID instead of the Sample Project ID
  projectId: `be8baa38-7b19-0054-b22b-084718bea24d`,
});