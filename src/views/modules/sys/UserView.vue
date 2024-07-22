<!--
  *
  * @author shiloh
  * @date 2024/7/16 15:31
-->
<template>
  <q-page>
    <q-table
      :rows="users"
      :columns="columns"
      title="User Info"
      row-key="id"
      selection="multiple"
      v-model:selected="selectedUsers"
      no-data-label="Nothing here:("
      :loading="loading"
      color="primary"
      :pagination="{ rowsPerPage: 10 }"
    >
      <template #top-left>
        <q-btn
          color="primary"
          :disable="loading"
          no-caps
          label="Add User"
        />
        <q-btn
          class="q-ml-sm"
          color="red"
          no-caps
          :disable="loading || !selectedUsers.length"
          label="Remove Users"
        />
      </template>
      <template #top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
        />
      </template>
      <template #body-cell-address="props">
        <q-td :props="props"> {{ (props.row as User).address.city }} - {{ (props.row as User).address.street }} </q-td>
      </template>
      <template #body-cell-website="props">
        <q-td :props="props">
          <q-btn
            flat
            dense
            color="primary"
            no-caps
            :href="(props.row as User).website"
            target="_blank"
          >
            {{ (props.row as User).website }}
          </q-btn>
        </q-td>
      </template>
      <template #body-cell-company="props">
        <q-td :props="props">
          {{ (props.row as User).company.name }}
        </q-td>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            color="primary"
            flat
            dense
            no-caps
            icon="visibility"
          >
          </q-btn>
          <q-btn
            color="primary"
            flat
            no-caps
            icon="edit_square"
            dense
          >
          </q-btn>
          <q-btn
            color="red"
            flat
            no-caps
            dense
            icon="delete"
          >
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
  import { QTableColumn, useQuasar } from 'quasar'
  import { onMounted, ref } from 'vue'
  import { api } from 'boot/axios'
  import { User } from './models'

  defineOptions({ name: 'UserView' })
  const $q = useQuasar()

  // region user table data

  const columns: QTableColumn[] = [
    {
      name: 'id',
      label: 'ID',
      align: 'center',
      field: 'id',
      sortable: true
    },
    {
      name: 'name',
      label: 'Name',
      align: 'center',
      field: 'name'
    },
    {
      name: 'username',
      label: 'Username',
      align: 'left',
      field: 'username'
    },
    {
      name: 'email',
      label: 'Email',
      align: 'right',
      field: 'email'
    },
    {
      name: 'address',
      label: 'Address',
      align: 'center',
      field: 'address'
    },
    {
      name: 'phone',
      label: 'Phone',
      align: 'center',
      field: 'phone'
    },
    {
      name: 'website',
      label: 'Website',
      align: 'left',
      field: 'website'
    },
    {
      name: 'company',
      label: 'Company',
      align: 'center',
      field: 'company'
    },
    {
      name: 'actions',
      label: 'Actions',
      align: 'center',
      field: 'actions'
    }
  ]
  const loading = ref(false)
  const users = ref<User[]>([])
  const selectedUsers = ref<User[]>([])

  // endregion

  // region fetch users

  const getUsers = async () => {
    loading.value = true
    try {
      const res = await api.get('/users')
      users.value = res.data as User[]
      $q.notify({
        type: 'positive',
        position: 'top',
        message: `Successfully obtained ${users.value.length} users!`,
        icon: 'mood'
      })
    } finally {
      loading.value = false
    }
  }

  // endregion

  onMounted(async () => {
    await getUsers()
  })
</script>

<style scoped></style>
