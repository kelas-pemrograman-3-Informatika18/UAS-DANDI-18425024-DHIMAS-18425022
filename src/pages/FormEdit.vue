<template>
    <q-page padding>
    <q-card flat class="q-gutter-md">
      <q-card-section>
          <div class="text-h5">Edit Data Pasien</div>
          <q-form
               @submit="onSubmit"
               @reset="onReset"
               class="q-mt-lg"
          >
          <div class="q-gutter-md">
              <q-input label="Nama Pasien" v-model="nama" filled :rules="[ val => val && val.length > 0 || 'Tolong isi Nama']"></q-input>
              <q-input label="Umur Pasien" v-model="umur" filled :rules="[ val => val && val.length > 0 || 'Tolong isi Pasien']"></q-input>
              <q-input label="Jenis Kelamin" v-model="jeniskelamin" filled :rules="[ val => val && val.length > 0 || 'Tolong isi JenisKelamin']"></q-input>
              <q-input label="Tempat/Tgl/Lahir" v-model="ttl" filled :rules="[ val => val && val.length > 0 || 'Tolong isi ttl']"></q-input>
              <q-input label="Alamat" v-model="alamat" filled :rules="[ val => val && val.length > 0 || 'Tolong isi Alamat']"></q-input>
              <q-input label="Penyakit" v-model="penyakit" filled :rules="[ val => val && val.length > 0 || 'Tolong isi Penyakit']"></q-input>
              <q-btn type="submit" label="Update" color="teal" unelevated></q-btn>
              <q-btn type="reset" label="Reset" color="teal" flat unelevated></q-btn>
          </div>
          </q-form>
      </q-card-section>
    </q-card>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      nama: null,
      umur: null,
      jeniskelamin: null,
      ttl: null,
      alamat: null,
      penyakit: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pasien/tampilsingle/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.nama = data.nama
          this.umur = data.umur
          this.jeniskelamin = data.jeniskelamin
          this.ttl = data.ttl
          this.alamat = data.alamat
          this.penyakit = data.penyakit
        })
    },
    onReset () {
      this.nama = null
      this.umur = null
      this.jeniskelamin = null
      this.ttl = null
      this.alamat = null
      this.penyakit = null
    },
    onSubmit () {
      this.$axios.put('pasien/edit/' + this.$route.params.id, {
        nama: this.nama,
        umur: this.umur,
        jeniskelamin: this.jeniskelamin,
        ttl: this.ttl,
        alamat: this.alamat,
        penyakit: this.penyakit
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'dashboard' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
