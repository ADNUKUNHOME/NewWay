import mongoose, { models } from "mongoose";

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
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Roadmap = models.Roadmap || mongoose.model("Roadmap", RoadmapSchema);
export default Roadmap;