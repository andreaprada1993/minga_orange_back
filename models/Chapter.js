import { Schema, model, Types } from 'mongoose';

const collection = 'chapters';

const schema = new Schema({
    manga_id: { type: Types.ObjectId, ref: 'mangas', required: true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array, required: true },
    order: { type: Number, ref: 'categories', required: true }

}, {
    timestamps: true
})

const Chapter = model(collection, schema);
export default Chapter;