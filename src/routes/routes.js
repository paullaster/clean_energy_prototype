import { createRouter, createWebHistory } from "vue-router";
import {HourlyData} from "../views";
const routes = [
    {
        path: '/hourlyData',
        components : {
            default: HourlyData,
        }
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;