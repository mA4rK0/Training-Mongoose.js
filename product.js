const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: [{ type: String }],
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  brand: {
    type: String,
    required: true,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Nilai tidak boleh minus."],
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

productSchema.methods.outStock = function () {
  this.stock = 0;
  this.availability.offline = false;
  this.availability.online = false;
  return this.save();
};

const Product = mongoose.model("Product", productSchema);

productSchema.statics.closeStore = function () {
  return this.updateMany(
    {},
    {
      stock: 0,
      "availability.online": false,
      "availability.offline": false,
    }
  );
};

const changeStock = async (id) => {
  const foundProduct = await Product.findById(id);
  await foundProduct.outStock();
  console.log("berhasil diubah");
};

// const tshirt = new Product({
//   name: "T-shirt Man",
//   price: 70000,
// });

// tshirt
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.errors.stock.properties.message);
//   });
