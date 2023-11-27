import axios from 'axios'
import { defineStore } from 'pinia'

export const useMitraStore = defineStore('mitra', {
    state: () => ({

    }),

    actions: {
        async getMagangRecommendation(nim, minat) {
            const res = await axios.post("http://127.0.0.1:5000/magang", {
                nim, minat
            })

            const recommendation = res.data
            return recommendation
        },

        async getRisetRecommendation(nip) {
            const res = await axios.post("http://127.0.0.1:5000/riset", {
                nip
            })

            const recommendation = res.data
            return recommendation
        }
    },
})