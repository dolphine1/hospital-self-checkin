<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">🏥 Hospital Self Check-In</h1>

      <div v-if="!submitted">
        <form @submit.prevent="handleSubmit">
          <label class="block mb-2 font-medium">Full Name</label>
          <input v-model="form.name" class="input" required />

          <label class="block mt-4 mb-2 font-medium">Reason for Visit</label>
          <textarea v-model="form.reason" class="input" rows="3" required></textarea>

          <label class="block mt-4 mb-2 font-medium">Phone Number</label>
          <input v-model="form.phone" type="tel" class="input" required />

          <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Check In
          </button>
        </form>
      </div>

      <div v-else class="text-center">
        <p class="text-xl font-semibold text-green-600">✅ You're Checked In!</p>
        <p class="mt-2">Name: {{ form.name }}</p>
        <p>Reason: {{ form.reason }}</p>
        <p>Phone: {{ form.phone }}</p>
        <button @click="reset" class="mt-6 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">New Check-In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  reason: '',
  phone: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}

const reset = () => {
  form.name = ''
  form.reason = ''
  form.phone = ''
  submitted.value = false
}
</script>

<style>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
