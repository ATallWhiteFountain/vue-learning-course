<template>
    <li>
        <base-card>
            <header>
                <h3>{{ resource.title }}</h3>
                <base-button mode="flat">Delete</base-button>
            </header>
            <p>{{ resource.description }}</p>
            <nav>
                <a :href="resource.link">View Resource</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: {
        resource: {
            type: Object,
            required: true
        }
    }
}
</script>