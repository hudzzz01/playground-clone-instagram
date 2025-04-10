const AuthController = {
    login: (body:any,set:any) => {
        console.log(body);
        
        if(body.email === "admin@admin.com" && body.password === "admin"){
            set.status = 200
            return {message: "selamat anda berhasil login", success: true}

        }
        
        set.status = 401
        return {message: "email atau password salah", success: true}
    },

}

export default AuthController