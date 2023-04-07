import { createRouter, createWebHistory } from "vue-router";
import {HourlyData} from "../views";
import { HourlyEnergyData } from "../components";
const routes = [
    {
        path: '/',
        components: {
            default: HourlyData,
            hourlyGraph: HourlyEnergyData,
        },
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;