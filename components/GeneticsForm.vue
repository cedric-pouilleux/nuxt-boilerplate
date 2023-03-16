<template>
  <Card>
    <template #title>
      Genetic
    </template>
    <template #content>
      <form class="form-plant-add p-inputtext-sm">
        <div class="form-item p-float-label">
          <InputText id="variety" v-model="state.name" aria-describedby="breeder-name-help" />
          <label for="variety">Name</label>
        </div>
        <Button label="Submit" @click="handleSubmit" />
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'

const state = reactive({
  name: '',
  breeders: []
})

const { $client } = useNuxtApp()

async function handleSubmit () {
  try {
    const a = await $client.pushGenetic.mutate(state)
    console.log(a)
  } catch (err: any) {
    console.log(err.status)
  }
}
</script>
