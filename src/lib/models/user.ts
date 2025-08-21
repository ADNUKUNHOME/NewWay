import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    hasRoadmap: {
        type: Boolean,
        default: false,
    },
    resetPasswordOtp: {
        type: String,
        default: null,
    },
    resetPasswordOtpExpiry: {
        type: Date,
        default: null,
    },
})

const User = models.User || mongoose.model("User", UserSchema);
export default User;