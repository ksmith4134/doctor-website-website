"use server";

export async function contactMe(prevState, formData) {
    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    try {
        if (rawFormData.name !== null) {
            return {
                message: {
                    body: "Success! We'll be in touch soon.",
                    type: "success",
                },
            };
        } else {
            throw new Error("Please try again.");
        }
    } catch (error) {
        return {
            message: {
                body: error.toString(),
                type: "error",
            },
        };
    }
}
