<template>
    <div class="editorContainer fg-black">
        <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></CKEditor>
    </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { component as CKEditor} from '@ckeditor/ckeditor5-vue'
import { ref, watch } from 'vue';


const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const editorData = ref(props.modelValue || '')

const editorConfig = ref({
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
})

watch(editorData, () => {
    emit('update:modelValue', editorData.value)
})
</script>

<style lang="scss">
.editorContainer{
    border-radius: 0.25rem;
}
.ck-editor__editable{
    min-height: 240px;
}
</style>