<template>
    <div class="goback-header">
        <span class="goback-icon" @click="jump">
            <i class="fa fa-angle-left"></i>
        </span>
        {{ title }}
    </div>
</template>

<script>
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default {
    props: ['title'],
    methods: {
        jump(){
            history.goBack();
        }
    }

}
</script>