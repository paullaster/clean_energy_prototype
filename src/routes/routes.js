import { createRouter, createWebHistory } from "vue-router";
import {HourlyData, DailyData, WeeklyData} from "../views";
import { HourlyEnergyData, DailyEnergyData, WeeklyEnergyData } from "../components";
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
            default: WeeklyData,
            hourlyGraph: WeeklyEnergyData,
        },
        
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;