import { ref, computed } from "vue"
import axios from "axios"
export default function useWeather() {

    const weather = ref({})

    const loading = ref(false)

    const error = ref("")

    const getWeather = async ({ city, country }) => {
        const key = import.meta.env.VITE_API_KEY
        loading.value = true
        weather.value = {}
        error.value = ""
        try {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
            const { data: result } = await axios(urlWeather)
            weather.value = result
        } catch (err) {
            error.value = "City not found"
        } finally {
            loading.value = false
        }

    }

    const showWeather = computed(() => {
        return Object.values(weather.value).length > 0
    })

    return {
        getWeather,
        weather,
        showWeather,
        loading,
        error
    }
}