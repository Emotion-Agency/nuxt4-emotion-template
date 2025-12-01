<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import {
  required,
  email as emailValidator,
  helpers,
  minLength,
} from '@vuelidate/validators'

const form = reactive({
  name: 'Emotion',
  email: '',
})

const rules = {
  email: {
    required: helpers.withMessage('Email is required', required),
    emailValidator: helpers.withMessage('Email is invalid', emailValidator),
  },
  name: {
    required: helpers.withMessage('Name is required', required),
    minLength: helpers.withMessage(
      'Name must be at least 3 characters',
      minLength(3)
    ),
  },
}

const v$ = useVuelidate(rules, form)

const { toast } = useToasts()

const onSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return
  toast.success(`Form submitted with email: ${form.email}`)

  form.name = 'Emotion'
  form.email = ''

  v$.value.$reset()
}
</script>

<template>
  <main style="max-width: 500px" class="flex flex-column gap-8 m-auto">
    <h1>Hello from Emotion!</h1>
    <form class="flex flex-column gap-4" novalidate @submit.prevent="onSubmit">
      <InputField
        v-model="form.name"
        required
        label="Name"
        :errors="v$?.name?.$errors"
      />
      <InputField
        v-model="form.email"
        required
        label="Email"
        type="email"
        :errors="v$?.email?.$errors"
      />

      <CustomButton type="submit">
        <template #start-icon>
          <Icon name="lucide:send" />
        </template>
        Submit
      </CustomButton>
    </form>
  </main>
</template>
