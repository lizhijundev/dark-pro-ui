<script lang="ts" setup>

const onClick = () => {
  console.log('button click')
}
</script>
<template>
  <div class="gap">
    <d-button size="lg" @click="onClick">按钮primary</d-button>
    <d-button size="md" @click="onClick">按钮primary</d-button>
    <d-button size="sm" @click="onClick">按钮primary</d-button>
  </div>
</template>
<style lang="less">
</style>
