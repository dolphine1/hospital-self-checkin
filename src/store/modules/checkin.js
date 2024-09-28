export default {
  namespaced: true,
  state: {
    patientInfo: null,
    appointmentInfo: null,
  },
  mutations: {
    SET_PATIENT_INFO(state, info) {
      state.patientInfo = info;
    },
    SET_APPOINTMENT_INFO(state, info) {
      state.appointmentInfo = info;
    },
  },
  actions: {
    async fetchPatientInfo({ commit }, patientId) {
      try {
        const response = await fetch(`/api/patients/${patientId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient info');
        }
        const data = await response.json();
        commit('SET_PATIENT_INFO', data);
      } catch (error) {
        console.error('Error fetching patient info:', error);
      }
    },
    async submitCheckIn({ state, commit }) {
      try {
        const response = await fetch('/api/checkin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patientInfo: state.patientInfo,
            appointmentInfo: state.appointmentInfo,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to submit check-in');
        }
        const data = await response.json();
        commit('SET_APPOINTMENT_INFO', data);
      } catch (error) {
        console.error('Error submitting check-in:', error);
      }
    },
  },
};
