<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">🏥 Hospital Self Check-In System</h1>
        <button @click="toggleAdmin" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {{ isAdmin ? 'Switch to Patient View' : 'Switch to Admin View' }}
        </button>
      </div>

      <div v-if="!isAdmin">
        <div v-if="!submitted">
          <h2 class="text-xl font-semibold mb-4">Patient Check-In</h2>
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

      <div v-else>
        <h2 class="text-xl font-semibold mb-4">Admin Panel</h2>
        <div v-if="patients.length === 0">
          <p class="text-gray-600">No patients checked in yet.</p>
        </div>
        <ul v-else class="space-y-4">
          <li v-for="(patient, index) in patients" :key="index" class="bg-white p-4 shadow rounded">
            <p><strong>Name:</strong> {{ patient.name }}</p>
            <p><strong>Reason:</strong> {{ patient.reason }}</p>
            <p><strong>Phone:</strong> {{ patient.phone }}</p>
          </li>
        </ul>
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
const isAdmin = ref(false)
const patients = ref([])

const handleSubmit = () => {
  patients.value.push({ ...form })
  submitted.value = true
}

const reset = () => {
  form.name = ''
  form.reason = ''
  form.phone = ''
  submitted.value = false
}

const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value
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
