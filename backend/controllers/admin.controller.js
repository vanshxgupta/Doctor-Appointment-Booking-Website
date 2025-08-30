import Doctor from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addDoctor = asyncHandler(async (req, res) => {
    try {
        // Extract form-data fields
        const { name, email, password, speciality, degree, experience, about, available, fees, address, date, slots_booked } = req.body;

        // Handle file upload
        const image = req.file ? req.file.path : "";

        console.log({ name, email, password, image, speciality, degree, experience, about, available, fees, address, date, slots_booked });

        // Check if doctor already exists
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            throw new ApiError(400, "Doctor already exists with this email");
        }

        // Create a new doctor
        const doctor = new Doctor({
            name,
            email,
            password,
            image,
            speciality: speciality || "General",
            degree,
            experience: Number(experience) || 0,
            about,
            available: available === "true",
            fees: Number(fees) || 0,
            address: typeof address === "string" ? address : JSON.stringify(address), // Convert object to string
            date: date || Date.now(),
            slots_booked: slots_booked ? JSON.parse(slots_booked) : {},
        });

        // Save doctor to the database
        await doctor.save();

        return res.status(201).json(new ApiResponse(201, doctor, "Doctor added successfully"));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error.message);
    }
});

export { addDoctor };
