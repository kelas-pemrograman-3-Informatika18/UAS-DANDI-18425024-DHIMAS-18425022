<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-green-14 text-grey-1-grey-14">
      <q-toolbar>
        <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
        <q-space></q-space>
        <q-btn flat round>
           <q-avatar>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBE8VxXjYIVi_qSi3CjgVyHVoRezHtIw8Bjg&usqp=CAU">
            </q-avatar>
             <q-menu>
          <q-list style="min-width: 100px">
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout()">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
       </q-toolbar>
     </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      breakpoint="500"
      content-class="text-grey-10 bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mb-md q-mt-md">
            <div>
              <q-avatar size="100px">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBE8VxXjYIVi_qSi3CjgVyHVoRezHtIw8Bjg&usqp=CAU">
                <div class="text-weight-bold q-mt-md"></div>
              </q-avatar>
              <div class="text-weight-bold q-mt-md"></div>
              <div>Admin Rumah Sakit</div>
            </div>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'dashboard' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'inputPasien' }">
            <q-item-section avatar>
              <q-icon name="input"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Input Pasien</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
