import app from "./app";

const PORT = process.env.HTTP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`BFF running on port ${PORT}`);
});
