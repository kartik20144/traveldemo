// import mongoose from "mongoose";

// const tourPlanSchema = new mongoose.Schema({
//   day: { type: Number, required: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
// });

// const inclusionSchema = new mongoose.Schema({
//   type: { type: String, required: true },
// });

// const typeSchema = new mongoose.Schema({
//   //   id: Number,
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   // price: { type: String, required: true },
//   price: { type: Number, required: true },
//   rating: { type: Number, required: true },
//   reviews: { type: Number, required: true },
//   location: { type: String, required: true },
//   // duration: { type: String, required: true },
//   days: { type: Number, required: true },
//   nights: { type: Number, required: true },
//   title: { type: String, required: true },
//   inclusions: [{ type: String, required: true }],
//   tourPlan: { type: [tourPlanSchema], required: true },
// });

// const tourSchema = new mongoose.Schema(
//   {
//     //   id: Number,
//     category: { type: String, required: true, unique: true},
//     types: { type: [typeSchema], required: true },
//     description: { type: String, required: true },
//     // image: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Tour = mongoose.model("Tour", tourSchema);

// export default Tour;

import mongoose from "mongoose";

const tourPlanSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const inclusionSchema = new mongoose.Schema({
  type: { type: String, required: true },
});

const typeSchema = new mongoose.Schema({
  //   id: Number,
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  location: { type: String, required: true },
  days: { type: Number, required: true },
  nights: { type: Number, required: true },
  title: { type: String, required: true },
  inclusions: [{ type: String, required: true }],
  tourPlan: { type: [tourPlanSchema], required: true },
  availableFrom: { type: Date, required: true },  // Added field
  availableTill: { type: Date, required: true },  // Added field
});

const tourSchema = new mongoose.Schema(
  {
    //   id: Number,
    category: { type: String, required: true, unique: true },
    types: { type: [typeSchema], required: true },
    description: { type: String, required: true },
    // image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
