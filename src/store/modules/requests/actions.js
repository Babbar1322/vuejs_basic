export default {
    async contactCoach(context , payload){
        const newRequest = {
            // id: new Date().toISOString(),
            coachId:payload.coachId,
            userEmail:payload.email,
            message:payload.message
        };
        const token = context.rootGetters.token;

       const response = await fetch('http://localhost:8000/api/requests?auth='+token,{
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'something went wrong');
            throw error;
        }

        newRequest.id = responseData.name;
        
        context.commit('addRequest', newRequest);
    },
    async loadRequest(context){
        const coachId = context.rootGetters.userId;
        const response = await fetch('http://localhost:8000/api/request');
        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'something went wrong');
            throw error;
        }
        // console.log(responseData);
        const requests = [];
        for(const key in responseData){
            const request = {
                id:key,
                coachId:coachId,
                userEmail:responseData[key].email,
                message:responseData[key].message
            }
            requests.push(request);
        }

        context.commit('setRequest', requests);

    }
}