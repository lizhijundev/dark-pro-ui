<template>
  <button class="d-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'd-button' });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return {
    [`d-button--${buttonProps.type}`]: buttonProps.type,
    [`d-button--${buttonProps.size}`]: buttonProps.size
  };
});
</script>
