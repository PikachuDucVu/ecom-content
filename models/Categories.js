import { model, models, Schema } from "mongoose";

const CategoriesSchema = new Schema({
  name: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId },
  properties: { type: Array },
});

export const Categories =
  models?.categories || model("categories", CategoriesSchema);
