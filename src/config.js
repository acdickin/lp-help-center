import { DeliveryClient } from "@kentico/kontent-delivery";
require("dotenv").config({
  path: `../.env`,
})
export const deliveryClient = new DeliveryClient({
  // Tip: Use your own sample project ID instead of the Sample Project ID
  projectId: process.env.REACT_APP_KONTENT_ID,
});