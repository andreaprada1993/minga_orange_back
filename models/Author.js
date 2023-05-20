import { Schema, model, Types } from "mongoose";

const collection = "authors";

const schema = new Schema({
    name: { type: String, require: true },
    last_name: { type: String },
    city: { type: String, require: true },
    country: { type: String, require: true },
    date: { type: Date },
    photo: { type: String, require: true },
    active: { type: Boolean, require: true },
    user_id: { type: Types.ObjectId, ref: "users", require: true }
}, {
    timestamps: true
});

const Author = model(collection, schema);

export default Author;