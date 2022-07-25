<script lang="ts" setup>
import { ref } from 'vue';
import { IonPage, IonSearchbar, IonSelect, IonSelectOption } from '@ionic/vue';
import { Country } from '@/domain/Country';
import { searchCountries } from '@/application/SearchCountries';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CountryItem from '../components/CountryItem.vue';

const searchCount = searchCountries()

const countries = ref<Country[]>([])
const searchedCountry = ref<string>('')
const selectedRegion = ref<string>('')


async function searchCountriesHandler(countryName: string): Promise<void> {
  const fetchedCountries = await searchCount.searchCountry('ger')
  countries.value = [...fetchedCountries]
}

</script>

<template>
  <IonPage>
    <DefaultLayout>  
      <IonSearchbar 
          class="country-searchbar my-4 p-0"
          @change="searchCountriesHandler(searchedCountry)"
          v-model="searchedCountry"
          :placeholder="$t('searchCountry')"
          :debounce="500"
      />
   
      <IonSelect 
        v-model="selectedRegion"
        interface="action-sheet" 
        class="filter-region w-1/2 p-4 my-4 text-white" 
        :placeholder="$t('filterByRegion')"> 
        <IonSelectOption value="europe">Europe</IonSelectOption>
        <IonSelectOption value="africa">Africa</IonSelectOption>
        <IonSelectOption value="america">America</IonSelectOption>
        <IonSelectOption value="asia">Asia</IonSelectOption>
        <IonSelectOption value="oceania">Oceania</IonSelectOption>
      </IonSelect>

      <CountryItem  
        v-for="(country, index) in countries" 
        :key="index"
        :country="country" 
      />

    </DefaultLayout>
  </IonPage>
</template>

<style lang="scss" scoped>
.country-searchbar {
  --color: white;
  --placeholder-color: white;
  --icon-color: white;
  --background: var(--dark-blue);
  --border-radius: 5px;

  ::v-deep(.searchbar-input-container) {
    height: 50px;
  }
}

.filter-region {
  --placeholder-color: white;
  background-color: var(--dark-blue);
  border-radius: 5px;
}
</style>
