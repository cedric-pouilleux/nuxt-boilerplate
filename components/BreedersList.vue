<template>
  <eection class="breeders-datalist">
    <DataTable :value="breeders" data-key="id" edit-mode="cell" class="p-datatable-sm" @cell-edit-complete="onCellEditComplete">
      <template #header>
        <header class="data-header">
          <span>Breeders</span>
          <Button size="small" icon="pi pi-plus-circle" text label="new" @click="handleAddBreeder" />
        </header>
      </template>
      <Column field="name" header="name" style="width: 25%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" type="text" class="p-inputtext-sm edit-input" />
        </template>
        <template #body="{data}">
          <InputText
            v-if="data.name === 'name'"
            autofocus
            type="text"
            class="p-inputtext-sm edit-input"
            placeholder="New breeder name"
          />
          <span v-else>{{ data.name }}</span>
        </template>
      </Column>
      <Column field="createdAt" header="createdAt">
        <template #body="slotProps">
          {{ slotProps.data.createdAt.toLocaleString("fr") }}
        </template>
      </Column>
      <Column field="updatedAt" header="updatedAt">
        <template #body="slotProps">
          {{ slotProps.data.updatedAt.toLocaleString("fr") }}
        </template>
      </Column>
      <Column :row-editor="true" style="width: 10%; min-width: 8rem" body-style="text-align:center">
        <template #body>
          <Button size="small" icon="pi pi-times" text label="remove" @click="handleRemove" />
        </template>
      </Column>
    </DataTable>
  </eection>
</template>

<script setup lang="ts">
import { reactive } from '#imports'

const { $client } = useNuxtApp()

const fetchedBreeders = await $client.fetchBreeders.query()
const breeders = reactive(fetchedBreeders)

async function onCellEditComplete (event: any) {
  try {
    breeders[event.index] = event.data.id
      ? await $client.editBreeder.mutate(event.newData)
      : await $client.pushBreeder.mutate(event.newData)
  } catch (error) {
    console.info(error)
  }
}

function handleAddBreeder () {
  breeders.unshift({
    id: 0,
    name: 'name',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

function handleRemove () {

}
</script>

<style scoped lang="scss">
.breeders-datalist {
  .data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edit-input {
    width: 100%
  }
}
</style>
