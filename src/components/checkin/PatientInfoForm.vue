<template>
    <v-form @submit.prevent="submitPatientInfo">
        <!-- Add form fields for patient information -->
        <v-btn type="submit">Next</v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'PatientInfoForm',
    methods: {
        submitPatientInfo() {
            // Dispatch action to store patient info
            this.$store.dispatch('checkin/fetchPatientInfo', this.patientId);
        },
    },
};
</script>