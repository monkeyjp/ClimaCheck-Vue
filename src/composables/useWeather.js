import axios from "axios"
export default function useWeather() {
    const getWeather = async ({ city, country }) => {
        const key = import.meta.env.VITE_API_KEY

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const { data: result } = await axios(urlWeather)
            console.log(result);




        } catch (error) {

        }

    }
    return {
        getWeather
    }
}