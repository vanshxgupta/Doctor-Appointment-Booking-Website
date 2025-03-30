import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    speciality: {
      type: String,
      // required: true,
    },
    degree: {
      type: String,
      // required: true,
    },
    experience: {
      type: Number,
      // required: true,
      // min: 0,
    },
    about: {
      type: String,
      // required: true,
    },
    available: {
      type: Boolean,
      // required: true,
    },
    fees: {
      type: Number,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    date: {
      type: Number,
      // required: true,
    },
    slots_booked: {
      type: Object,
      // required: true,
    },
  },{minimize:false}
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;