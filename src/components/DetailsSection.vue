<template>
    <button class="btn-detail" id="show-modal" @click="showModal()">Детали</button>
        <Teleport to="body">
          <DetailModal :show="showDetailModal" @close="hideModal()">
            <template #header>
              <slot></slot>
            </template>
          </DetailModal>
        </Teleport>
</template>
<script>
import DetailModal from "./DetailModal.vue";
export default{
  components: {
    DetailModal
  },
  data() {
    return{
      showDetailModal:false,
    }
  },
  methods:{
    showModal(){
      this.showDetailModal = true;
    },
    hideModal(){
      this.showDetailModal = false;
    }
  }

}
</script>
