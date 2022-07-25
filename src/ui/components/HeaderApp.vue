<script lang="ts" setup>
import { IonHeader, IonIcon, IonToolbar, IonButtons } from '@ionic/vue';
import { moonOutline } from 'ionicons/icons';
</script>

<template>
    <IonHeader>
        <IonToolbar class="h-24 flex justify-center items-center">
            <span class="header-title ml-4">{{ $t('header.title') }}</span>
            <IonButtons slot="end">
                <IonIcon size="small" slot="icon-only" :icon="moonOutline" />
                <span class="ml-2 mr-4">{{ $t('header.darkMode')}}</span>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
</template>

<style lang="scss" scoped>
  ion-toolbar {
    --background: #2B3945;
    --color: #FFF;
  }

  .header-title {
    font-family: 'Nunito-Sans-Bold';
    font-size: 1.1rem;
  }
</style>
