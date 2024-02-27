/** @type {import('next').NextConfig} */
import { BASE_PATH } from "./config.js";
const nextConfig = {
    output: "export",
    basePath: BASE_PATH,
};

export default nextConfig;
