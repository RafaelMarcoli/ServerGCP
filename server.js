import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`escutando na ${port}`);
  console.log(`Ctrl + click http://localhost:${port}`);
});
