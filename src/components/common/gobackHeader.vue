<template>
    <div class="goback-header">
        <span class="goback-icon" @click="jump">
            <i class="fa fa-angle-left"></i>
        </span>
        {{ title }}
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        jump(){
            browserHistory.goBack();
        }
    }

}
</script>
