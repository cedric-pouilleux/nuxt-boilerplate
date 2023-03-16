<template>
  <DataTable :value="genetics" data-key="id" class="p-datatable-sm">
    <Column field="id" header="id" />
    <Column field="name" header="name" />
    <Column field="createdAt" header="createdAt">
      <template #body="slotProps">
        {{ slotProps.data.createdAt.toLocaleDateString("fr") }}
      </template>
    </Column>
    <Column field="updatedAt" header="updatedAt">
      <template #body="slotProps">
        {{ slotProps.data.updatedAt.toLocaleDateString("fr") }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()

const genetics = await $client.fetchGenetics.query()
</script>
