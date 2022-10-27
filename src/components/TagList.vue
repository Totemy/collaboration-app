<template>
<ul>
     <li v-for="(item, index) in list" :key="index">
        <TagItem @remove="removeItem(index)">{{ item }}</TagItem>
    </li>
</ul>
</template>
<script>
import TagItem from './TagItem.vue';
export default {
    components:{
        TagItem
    },
    props:{
        list:{type:Array, required: true}
    },
    methods:{
        removeItem(index){
            this.$emit("removeItem",this.list,index);
        }
    }
}
</script>