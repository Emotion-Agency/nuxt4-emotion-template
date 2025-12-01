<script lang="ts" setup>
import { useForwardPropsEmits } from 'reka-ui'
import type { IInput, TInputEmits } from '~~/shared/types/input'

type Props = Omit<IInput, 'type'> & {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search...',
})
const emits = defineEmits<TInputEmits>()

const forward = useForwardPropsEmits(props, emits)

const model = defineModel<string>()
</script>

<template>
  <InputField v-model="model" type="search" v-bind="forward" class="s-input">
    <template #start-icon>
      <Loader v-if="loading" />
      <Icon v-else name="lucide:search" class="icon" />
    </template>
    <template v-if="model?.trim()" #end-icon>
      <IconButton
        label="Clear"
        variant="ghost"
        class="s-input__clear"
        size="sm"
        @click="model = ''"
      >
        <Icon name="lucide:x" class="icon" />
      </IconButton>
    </template>
  </InputField>
</template>

<style lang="scss">
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

.s-input__clear {
  position: relative;
  top: rem(-1);
  right: rem(-9);
}
</style>
