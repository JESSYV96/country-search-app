import { CountryService } from "@/application/ports";

const API_URL = 'https://restcountries.com/v3.1/'

export function useCountryService(): CountryService {
    return {
        async fetchCountriesByName(name: string): Promise<any[]> {
            try {
                const response = await fetch(`${API_URL}name/${name}`)
                return response.json()
            } catch (err) {
                console.error(err)
                return []
            }
        }
    }
}
