const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            courseGoalA: 'Finish the test and have fun!',
            vueLink: 'https://vuejs.org/'

        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal;
            } else {
                return this.courseGoalA;
            }
        }
    }
});

app.mount('#user-goal');