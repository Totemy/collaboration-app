<template>
  <Transition name="detail-modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="btn btn-primary modal-default-button"
                @click="$emit('close')"
              >Закрыть</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  props: {
    show: Boolean
  }
}
</script>