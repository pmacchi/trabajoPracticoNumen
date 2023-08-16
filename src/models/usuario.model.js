import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    password: {
        type: String,
        required:true
    }

}, {
    timestamps: true
}
);


export default mongoose.model('Usuario', usuarioSchema);


