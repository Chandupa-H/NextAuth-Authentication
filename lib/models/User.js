import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  provider: { type: String, required: true },
});

let User;
try {
  User = mongoose.models.User || mongoose.model("User", UserSchema);
} catch (error) {
  console.error("Error defining User model:", error);
  User = mongoose.model("User", UserSchema);
}

export default User;
