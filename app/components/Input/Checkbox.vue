<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
  type CheckboxRootEmits,
  type CheckboxRootProps,
} from 'reka-ui'

const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxRoot class="checkbox" v-bind="forward">
    <CheckboxIndicator class="checkbox-i">
      <Icon
        v-if="modelValue === 'indeterminate'"
        name="lucide:minus"
        class="icon"
      />
      <Icon v-else name="lucide:check" class="icon" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<style lang="scss" scoped>
.checkbox {
  background-color: transparent;
  width: rem(16);
  height: rem(16);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
  transition: 0.3s ease;
  transition-property: border-color, background-color, color;
  &:hover,
  &:focus {
    outline-color: var(--primary-active);
    border-color: var(--primary-active);
  }

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    background-color: var(--primary);
    color: var(--primary-button-text);
  }
}
</style>
