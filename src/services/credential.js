function getProfile() {
    const profile = localStorage.getItem('profile');
    if (profile) {
        return JSON.parse(profile);
    }
    return null;
}

function setProfile(data) {
    localStorage.setItem('profile', data);
}

function clearProfile() {
    localStorage.clear()
}

function isLogin() {
    if (getProfile()) {
        return true;
    }
    return false;
}

export { setProfile, getProfile, clearProfile, isLogin }