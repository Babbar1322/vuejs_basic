export default {
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGKKVFEc5leJskTQLb6uUfK9SqNAid6go',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        });
        const responseData = await response.json();
        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'failed to authenticate , Check Your Login Data');
            throw error;
        }

        console.log(responseData);

        context.commit('setUser',{
            token:responseData.idToken,
            userId :responseData.localId,
            tokenExpiration:responseData.expiresIn
        });
        
    },
   async signup(context,payload){
     const response =   await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGKKVFEc5leJskTQLb6uUfK9SqNAid6go',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        });

        const responseData = await response.json();

        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'failed to authenticate , Check Your Login Data');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser',{
            token:responseData.idToken,
            userId :responseData.localId,
            tokenExpiration:responseData.expiresIn
        });

    }
};