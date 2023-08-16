import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    equipment: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    problem: {
        type: String,
        required: false,
    },
    incident: {
        type: String,
        required: false,
    },
    solution: {
        type: String,
        required: false,
    },
    solution2: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }, 

});

export default mongoose.model('Task', taskSchema);
