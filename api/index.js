const express = require("express");
const app = express();
const dotenv = require("dotenv");
//const products = require("./data/Product");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
const moongose = require("mongoose");

//conexion db
moongose
  .connect(process.env.MONGOSEDB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());

const urlFrontend = "https://ecommerce-topaz-three-27.vercel.app";

app.use(
  cors({
    origin: urlFrontend,
    credentials: true,
  })
);

app.use(cors());

// database seed route
app.use("/api/seed", databaseSeeder);

// route para usuarios
app.use("/api/users", userRoute);

// route para products
app.use("/api/products", productRoute);

// route para orders
app.use("/api/orders", orderRoute);

// paypal payment api for client key
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.listen(PORT || 4000, () => {
  console.log("Server iniciado en el puerto " + PORT);
});

// api products test route
// app.get("/api/products", (req,res) => {
//     res.json(products)
// })

// app.get("/api/products/:id", (req,res) => {
//     const product = products.find((product) => product.id === req.params.id);
//     res.json(product);
// })
