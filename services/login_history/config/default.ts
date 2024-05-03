/** @format */

import dotenv from "dotenv";

dotenv.config();
export default {
    port: process.env.PORT || 4001,
    mode: "development",
    name: "logiin History Service",
};
