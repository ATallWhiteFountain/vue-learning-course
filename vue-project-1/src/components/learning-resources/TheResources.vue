<template>
    <base-card>
        <base-button @click="setSelectedTab('learning-resources')" :mode="learningButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addButtonMode">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import LearningResources from './components/learning-resources/LearningResources';
import AddResources from './components/learning-resources/add-resources';

export default {
    components: {
        LearningResources,
        AddResources
    },
    data() {
        return {
            selectedTab: 'learning-resources',
            storedResources: [
                { 
                id: 'official-guide',
                title: 'Official Guide',
                description: 'the official Vue.js documentation',
                link: 'https://vuejs.org'
                },
                { 
                id: 'google',
                title: 'Google',
                description: 'Learn to google...',
                link: 'https://google.org'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    methods: {
        setSelectedTab(elName) {
            this.selectedTab = elName;
        }
    },
    computed: {
        learningButtonMode() {
            return this.selectedTab === 'learning-resources' ? null : 'flat';      
        },
        addButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    }
}
</script>