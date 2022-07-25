import { Country, toCountry } from "@/domain/Country"
import { useCountryService } from "@/services/CountryService"

export function searchCountries() {
    const countryService = useCountryService()

    const searchCountry = async (name: string): Promise<Country[]> => {
        const countries = await countryService.fetchCountriesByName(name)
        return countries.map((country) => {
            return toCountry(country)
        })
    }

    return {
        searchCountry
    }
}