import { createRouter, createWebHistory } from "vue-router";
import {HourlyData, DailyData} from "../views";
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
            default: DailyData,
            hourlyGraph: DailyEnergyData,
        },
        
    },
    {
        path: '/weekly_data',
        components: {
            default: DailyData,
            hourlyGraph: DailyEnergyData,
        },
        
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;