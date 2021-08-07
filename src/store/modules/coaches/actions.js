export default {
    async registerCoach(context ,data){
        const userId = context.rootGetters.userId;
        var areas = data.areas;
        const coachData = {
            // id:context.rootGetters.userId,
            firstName : data.first,
            lastName:data.last,
            description:data.desc,
            hourlyRate:data.rate,
            areas:areas
        };

        const token = context.rootGetters.token;

    const response =  await fetch('http://localhost:8000/api/coaches?auth='+token,{
        headers: {
            'Content-Type': 'application/json'
          },
            method:'POST',
            body:JSON.stringify(coachData)
        });
        
        // const responseData = await response.json();
        
        if(!response.ok){
            // ...
        }



        context.commit('registerCoach' ,{
            ...coachData,
            id:userId
        })
    },
    async loadCoaches(context ,payload){
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
        }
        const response = await fetch('http://localhost:8000/api/coach');
        const responseData = await response.json();

        if(!response.ok){
           const error  = new Error(responseData.message || 'failed to fetch');
           throw error;
        }

        const coaches = [];

        for(const key in responseData){
            const coach = {
            id:key,
            firstName : responseData[key].firstName,
            lastName:responseData[key].lastName,
            description:responseData[key].description,
            hourlyRate:responseData[key].hourlyRate,
            areas:responseData[key].areas.split(",")
            };
           console.log(coach);
            coaches.push(coach);
        }

        context.commit('setCoaches',coaches);
        context.commit('setFetchTimestamp');

    }
}