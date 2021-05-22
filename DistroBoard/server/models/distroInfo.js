// this file contains mongo db schema which determines what each disto has in its information section.
import mongoose from 'mongoose';

const distoSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//convert distoschema into model DistroInfo
const DistroInfo = mongoose.model('DistroInfo', distoSchema);

export default DistroInfo;