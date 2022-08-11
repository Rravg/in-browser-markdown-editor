const AuthControl = {
    isAuthenticated: false,
    login(callback: VoidFunction) {
        AuthControl.isAuthenticated = true;
        callback();
    },
    logout(callback: VoidFunction) {
        AuthControl.isAuthenticated = false;
        callback();
    },
};

export default AuthControl;
