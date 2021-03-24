<template>

    <h2>Manage goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to='body'>
        <error-alert v-if="inputInvalid">
            <h2>Input is invalid.</h2>
            <p>Please enter valid input.</p>
            <button @click="confirmError">Okay</button>
        </error-alert>    
    </teleport>

</template>

<script>
import ErrorAlert from './ErrorAlert';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputInvalid: false
        }
    },
    methods: {
        setGoal() {
            const val = this.$refs.goal.value;
            if (val === '') {
                this.inputInvalid = true;
            }
        },
        confirmError() {
            this.inputInvalid = false;
        }
    }
}
</script>