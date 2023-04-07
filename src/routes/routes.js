import { createRouter, createWebHistory } from "vue-router";
import {
    HourlyEnergyData
} from '../components'
const routes = [
    {
        path: '/hourlyData',
        components : {
            default: HourlyEnergyData,
        }
    }
];

const router = createRouter ( {
    history: createWebHistory(),
    routes,
})

export default router;