<template>
  <div>
    <b-navbar type="inverse" variant="primary">
      <b-nav>
        <b-link class="navbar-brand mr-auto" to="#">
          <span>社説コンペア</span>
        </b-link>
        <b-button class="ml-auto btn-white" v-b-modal.add-modal>add</b-button>
      </b-nav>
    </b-navbar>
    <add-modal></add-modal>
  </div>
</template>

<script>
import AddModal from './AddModal';

export default {
  components: {
    AddModal,
  },
};
</script>

<style scoped>
.btn-white {
    color: white;
    background-color: transparent;
    border-color: white;
}

.btn-white:hover {
    color: #0275d8;
    background-color: white;
    border-color: #0275d8;
}

</style>
