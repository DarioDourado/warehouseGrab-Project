import { hash } from "bcryptjs";

export async function passWordHashed(password: string) {
    const passwordHash = await hash(password, 6)
    return passwordHash
}