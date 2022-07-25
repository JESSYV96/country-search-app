import { Country } from "@/domain/Country";

export interface CountryService {
    fetchCountriesByName(name: string): Promise<any[]>
}