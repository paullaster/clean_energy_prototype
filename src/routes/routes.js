import { createRouter, createWebHistory } from "vue-router";
import {HourlyData} from "../views";
import { HourlyEnergyData, DailyEnergyData } from "../components";
const routes = [
    {
        path: '/',
        components: {
            default: HourlyData,
            hourlyGraph: HourlyEnergyData,
        },
        
    },
    {
        path: '/daily_data',
        components: {
            default: HourlyData,
            hourlyGraph: DailyEnergyData,
        },
        
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;