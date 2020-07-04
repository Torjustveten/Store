<template>
  <span v-if="count > 0" class="badge">
    {{ count }}
  </span>
</template>

<script>
export default {
  name: 'counter-badge',
  props: ['count'],
}
</script>

<style>
.badge {
  position: absolute;
  top: -.5rem;
  right: -1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #3d5469;
  color: #FFF;
}
</style>