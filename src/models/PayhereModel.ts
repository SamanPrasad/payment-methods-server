import mongoose from "mongoose";

const payhereCheckoutSchema = new mongoose.Schema({
  card_holder_name: String,
  card_no: String,
  order_id: String,
  payment_id: String,
  method: String,
  status_code: String,
});

export const PayhereCheckout =
  mongoose.models.PayhereCheckout ||
  mongoose.model("PayhereCheckout", payhereCheckoutSchema);
