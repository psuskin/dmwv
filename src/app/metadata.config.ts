const prodUrl = "https://dmwv.de";
const devUrl = "http://localhost:3000";

export const metadataConfig = {
    metadataBase: new URL(
        process.env.NODE_ENV === "production" ? prodUrl : devUrl
    ),
}; 