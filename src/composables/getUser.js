import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const user = ref(projectAuth.currentUser)

//_user value when authentication is changed
projectAuth.onAuthStateChanged(_user => {
    console.log('User state change. Current user is:', _user)
    user.value = _user
});

const getUser = () => {
    return { user }
}

export default getUser