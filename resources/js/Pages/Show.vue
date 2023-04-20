<script>
import KinstaLayout from "../Layouts/KinstaLayout.vue";
import { Head } from '@inertiajs/inertia-vue3';

export default {
    name:'Show',
    components:{
        'KinstaLayout': KinstaLayout,
        'Head':Head,
    },
    props:{
        article:Object
    }
}
</script>

<template>
    <Head title="Kinsta Blog Details">
<!--        <title>Kinsta Blog Details</title>-->
        <meta name="description" content="Kinsta blog  details for developers">
    </Head>
    <KinstaLayout>
        <article class="mx-auto mt-10 flex justify-center max-w-5xl border-b-2">
            <img
                :src="this.article.image_url"
                class="w-80 h-80 rounded-xl mx-auto py-5"
                alt=""
            />
            <div class="text-left flex flex-col pt-5 pb-10 px-10">
                <h1 class="text-xl font-semibold mb-10">{{ article.title }}</h1>
                <p>{{ article.body }}</p>
            </div>
        </article>
    </KinstaLayout>
</template>
