<template>
  <div>
    <h1>App title</h1>

    <BreedersList />

    <GeneticForm />
    <GeneticsList />

    <form class="form-plant-add p-inputtext-sm">
      <div class="form-item p-float-label">
        <InputText id="username" v-model="state.variety" aria-describedby="username-help" />
        <label for="username">Variety</label>
      </div>

      <div class="form-item p-float-label">
        <Calendar v-model="state.date" placeholder="Select a day" show-icon show-button-bar />
        <label for="username">Started flowering date</label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '#imports'
import BreedersList from '~/components/BreedersList.vue'
import GeneticForm from '~/components/GeneticsForm.vue'
import GeneticsList from '~/components/GeneticsList.vue'

const { $client } = useNuxtApp()

const resp = await $client.fetchPlants.query()

const state = reactive({
  variety: undefined,
  date: undefined
})

console.log(resp)
</script>

<style scoped lang="scss">

.form-plant-add {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 300px;
}

.form-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
