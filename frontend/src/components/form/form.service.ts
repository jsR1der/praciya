const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phone = /^0[0-9]{9}$/
const name = /^[A-Za-z0-9]{2,60}$/


export const regExps = {
    name,
    email,
    phone
}

export const positions = [
    {
        "id": 1,
        "name": "Lawyer"
    },
    {
        "id": 2,
        "name": "Content manager"
    },
    {
        "id": 3,
        "name": "Security"
    },
    {
        "id": 4,
        "name": "Designer"
    }
]