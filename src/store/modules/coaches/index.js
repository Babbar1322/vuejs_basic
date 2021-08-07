import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced:true,
    state(){
        return {
            lastFetch:null,
            coaches:[
                // {
                //     id:'c1',
                //     firstName:'Maximilian',
                //     lastName:'Schwarzuller',
                //     areas:['frontend','backend','career'],
                //     description:
                //     "I'm Maximilian and I've worked as a freelance web developer for years.",
                //     hourlyRate:30,
                // },
                // {
                //     id:'c2',
                //     firstName:'Julie',
                //     lastName:'Jones',
                //     areas:['frontend','career'],
                //     description:
                //     "I'm Julie and  as a senior  developer in a big tech comapany, I can help you.",
                //     hourlyRate:30,
                // }
            ]
        }
    },

        mutations,
        actions,
        getters
    
}