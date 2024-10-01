<template>
  <HomeLayout>
    <Card class="border-white">
      <template #content>
        <DataTable :value="users" tableStyle="min-width: 50rem">
          <Column field="ID" header="ID"></Column>
          <Column field="USERNAME" header="USERNAME"></Column>
          <Column field="FULL_NAME" header="NAME"></Column>
        </DataTable>
      </template>
    </Card>
  </HomeLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const users = ref([])

console.log('test')

onMounted(async () => {
  const response = await fetch('http://localhost:3000/api/poker-night/get-users').then(res => res.json());

  users.value = response;
})

</script>
