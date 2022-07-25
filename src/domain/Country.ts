import { Language } from "./valueObject/Language"

export type Country = {
    name: string
    flag: string
    population: number
    capital: string
    region: string
    subregion: string
    currency?: string
    languageSpoken?: Language[]
    borderCountries?: Country[]
}

export function toCountry(countryFromAPI: any): Country {
    return {
        name: countryFromAPI.name.common,
        flag: countryFromAPI.flags.png,
        population: countryFromAPI.population,
        capital: countryFromAPI.capital[0],
        region: countryFromAPI.region,
        subregion: countryFromAPI.subregion,
    }
}