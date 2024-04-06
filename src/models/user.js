import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;