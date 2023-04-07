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
