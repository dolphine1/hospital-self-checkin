<template>
    <div>
        <!-- Display appointment details and confirmation -->
        <v-btn @click="confirmAppointment">Confirm Check-In</v-btn>
    </div>
</template>

<script>
export default {
    name: 'AppointmentConfirmation',
    methods: {
        confirmAppointment() {
            // Dispatch action to confirm check-in
            this.$store.dispatch('checkin/submitCheckIn');
        },
    },
};
</script>
