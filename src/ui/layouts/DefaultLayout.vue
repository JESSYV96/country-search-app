<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import HeaderApp from "../components/HeaderApp.vue";

</script>

<template>
    <HeaderApp />
    <IonContent>
        <slot></slot>
    </IonContent>
</template>

<style>
ion-content {
    --background: var(--very-dark-blue);
    --color: #FFF;
    --padding-start: 2rem;
    --padding-end: 2rem;
}
</style>