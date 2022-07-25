<script lang="ts" setup>
import { defineProps } from 'vue';
import { Country } from '@/domain/Country';
import { IonCard, IonImg, IonCardTitle, IonCardContent } from '@ionic/vue';

interface Props {
  country: Country
}

const props = defineProps<Props>() 

</script>

<template>
   <IonCard class="m-8">
        <IonImg :src="props.country.flag" />
    
        <div class="card-content-container">
          <IonCardTitle class="my-2 font-bold text-lg text-white">{{ props.country.name }}</IonCardTitle>
          <IonCardContent class="py-2 px-0">
            <p>Population: {{ props.country.population.toLocaleString('en-US') }} </p>
            <p>Region: {{ props.country.region }} </p>
            <p>Capital: {{ props.country.capital }} </p>
          </IonCardContent>
        </div>
  </IonCard>
</template>

<style lang="scss" scoped>
    .card-content-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 1rem;
        background-color: var(--dark-blue);
        color: white;
    }
</style>