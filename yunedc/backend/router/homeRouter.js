const express = require("express")
const router = express.Router()

router.get("/getHomeData", (req, res) => {
  res.json({
    code: 200,
    data: {
      orderTotal: 1200,
      salesTotal: 230,
      account: 6800
    }
  })
})

export default router;