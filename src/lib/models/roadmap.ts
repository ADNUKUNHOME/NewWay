import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema({
    roadmapName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

const Roadmap = mongoose.model("Roadmap", RoadmapSchema);
export default Roadmap;