const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxLength: 1000,
        },
        coverImage: {
            type: String,
            default: "",
        },
        techStack: {
            type: [String],
            required: true,
            default: [],
        },
        githubUrl: {
            type: String,
            default: "",
        },
        liveUrl: {
            type: String,
            default: "",
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        likesCount: {
            type: Number,
            default: 0,
        },
        tags: {
            type: [String],
            default: [],
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

//index the project schema
projectSchema.index({ title: "text", description: "text", techStack: "text" });

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;
