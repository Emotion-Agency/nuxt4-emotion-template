<script lang="ts" setup>
import type { IButtonProps } from '#shared/types/button'

withDefaults(defineProps<IButtonProps>(), {
  size: 'lg',
  variant: 'primary',
})

const slots = useSlots()
</script>

<template>
  <LoFiButton
    class="button"
    :class="[`button--${size}`, `button--${variant}`]"
    :href="href"
    :tag="tag"
    :type="type"
  >
    <div v-if="slots['start-icon']" class="button__icon button__start-icon">
      <slot name="start-icon" />
    </div>
    <div class="button__content">
      <slot />
    </div>
    <div v-if="slots['end-icon']" class="button__icon button__end-icon">
      <slot name="end-icon" />
    </div>
  </LoFiButton>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/ui/button' as *;

.button {
  border-radius: var(--rounded-full);
  min-width: rem(32);
  @include button;

  &--sm {
    padding: rem(4) rem(12);
    gap: rem(4);
    height: rem(28);
    .button__icon {
      font-size: rem(14);
      width: rem(14);
      height: rem(14);
    }
  }
  &--md {
    padding: rem(6) rem(12);
    gap: rem(6);
    height: rem(36);
    .button__icon {
      font-size: rem(14);
      width: rem(14);
      height: rem(14);
    }
  }
  &--lg {
    padding: rem(8) rem(12);
    gap: rem(8);
    height: rem(37.5);
    .button__icon {
      font-size: rem(16);
      width: rem(16);
      height: rem(16);
    }
  }
}

.button__icon {
  flex-shrink: 0;
  > :deep(svg) {
    height: auto;
  }
}
</style>
