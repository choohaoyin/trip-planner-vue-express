import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './style.scss'

Vue.config.productionTip = false


let date_limit = new Date();
date_limit.setHours(24);
date_limit = `${String(date_limit.getFullYear()).padStart(4, "0")}-${String(date_limit.getMonth() + 1).padStart(2, "0")}-${String(date_limit.getDate()).padStart(2, "0")}`


const basic_meal_time = [{ time: "09:00", description: "Breakfast" }, { time: "13:00", description: "Lunch" }, { time: "18:00", description: "Dinner" }]
// let meal_time = { basic: null, adv: null };


new Vue({
    data: {
        current_page: 0,
        animation: "",
        list: false,
        search_result: null,
        query: null,
        locations: {
            start: null,
            end: null,
            list: [],
            limit: 2
        },
        timing: {
            date: null,
            start_time: null,
            end_time: null,
            days: null,
            hours: 2,
            meal_time: null
        },
        date: null,
        date_limit: date_limit,
        setting: "basic",
        hours_setting: "same_for_all",
        result: null,
        detail_location: null,
        detail_id: null,
        search_loading: false,
        meal_time: { basic: [...basic_meal_time], adv: [...basic_meal_time] },
        meal: { time: null, description: null },
        itinerary_day: 0,
        itinerary_msg: false,
        dev_mode: false,
        reasons: [
            "The location exceeds travel duration limit.",
            "The location exceeds itinerary duration.",
            "The location is not open throughout these few days.",
            "The location is closed upon possible arrival time."
        ]
    },
    render: h => h(App),
}).$mount('#app')
