const API_BASE = 'http://localhost:3000/api/controllers'

const ControllersAPI = {
    getControllers: async () => {
        const response = await fetch(API_BASE)
        return await response.json()
    },

    getControllerById: async (id) => {
        const response = await fetch(`${API_BASE}/${id}`)
        return await response.json()
    },

    createController: async (controller) => {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(controller)
        })

        return await response.json()
    },

    updateController: async (id, controller) => {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(controller)
        })

        return await response.json()
    },

    deleteController: async (id) => {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'DELETE'
        })

        return await response.json()
    }
}

export default ControllersAPI