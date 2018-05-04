/*eslint-disable no-console*/
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BuyIt is running on port:${PORT}`);
});
