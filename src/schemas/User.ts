import { Schema, model } from "mongoose"

interface UserInterface extends Document {
    email?: String
    firstName?: String
    lastName?: String
    fullName(): String
}

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
})

UserSchema.methods.fullName = function () : String {
    return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)