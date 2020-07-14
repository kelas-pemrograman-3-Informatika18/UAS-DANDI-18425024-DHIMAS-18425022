<template>
  <q-page padding>
<q-table
      title="Data Pasien"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nama" :props="props">
            {{ props.row.nama }}
          </q-td>
          <q-td key="umur" :props="props">
            {{ props.row.umur }}
          </q-td>
          <q-td key="jeniskelamin" :props="props">
            {{ props.row.jeniskelamin }}
            </q-td>
            <q-td key="ttl" :props="props">
            {{ props.row.ttl }}
          </q-td>
          <q-td key="alamat" :props="props">
            {{ props.row.alamat }}
            </q-td>
            <q-td key="penyakit" :props="props">
            {{ props.row.penyakit }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Edit" :to="{ name: 'formEditPasien', params: { id: props.row._id}}" color="orange" icon="edit" unelevated></q-btn>
               </div>
              <div class="col">
                <q-btn label="Hapus" @click="confirm(props.row._id)" color="negative" icon="delete" unelevated></q-btn>
               </div>
              </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'nama',
          required: true,
          label: 'nama',
          align: 'left',
          field: 'nama',
          sortable: true
        },
        { name: 'umur', align: 'center', label: 'umur', field: 'umur', sortable: true },
        { name: 'jeniskelamin', label: 'jeniskelamin', align: 'center', field: 'jeniskelamin', sortable: true },
        { name: 'ttl', label: 'ttl', align: 'center', field: 'ttl', sortable: true },
        { name: 'alamat', label: 'alamat', align: 'center', field: 'alamat', sortable: true },
        { name: 'penyakit', label: 'penyakit', align: 'center', field: 'penyakit', sortable: true },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pasien/get')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Menghapus Data pasien Ini ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('pasien/delete/' + id)
          .then((res) => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan
              })
              this.getData()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan
              })
            }
          })
      })
    }
  }
}
</script>
