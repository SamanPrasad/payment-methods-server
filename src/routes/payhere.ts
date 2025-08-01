import { Router } from "express";
import md5 from "crypto-js/md5";

const router = Router();

router.post("/checkout", (req, res) => {
  const { amount } = req.body;
  console.log(amount);

  let merchantSecret = process.env.MERCHANT_SECRET as string;
  let merchantId = process.env.MERCHANT_ID;
  console.log(merchantId, merchantSecret);
  let orderId = "order12345";
  let hashedSecret = md5(merchantSecret).toString().toUpperCase();
  let amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replace(/,/g, "");
  let currency = "LKR";
  let hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  res.json({ hash });
});

export default router;
