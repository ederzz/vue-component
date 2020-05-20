<template>
    <div class="ga-uploader">
        <el-upload
            v-on="$listeners" 
            v-bind="$props"
            ref="uploader"
        >
            <template slot="default">
                <slot />
            </template>
            <template slot="tip">
                <slot name="tip" />
            </template>
            <template slot="trigger">
                <slot name="trigger" />
            </template>
        </el-upload>
        <Render 
            v-for="tip in tips" 
            :title="tip.title"
            :extra="tip.extra"
            :contents="tip.contents"
        />
    </div>
</template>

<script>
import Render from './render'

export default {
    components: {
        Render
    },
    props: {
        // element-ui props start
        type: String,
        action: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: 'file'
        },
        data: Object,
        headers: Object,
        withCredentials: Boolean,
        multiple: Boolean,
        accept: String,
        onStart: Function,
        onProgress: Function,
        onSuccess: Function,
        onError: Function,
        beforeUpload: Function,
        drag: Boolean,
        onPreview: {
            type: Function,
            default: function() {}
        },
        onRemove: {
            type: Function,
            default: function() {}
        },
        fileList: Array,
        autoUpload: Boolean,
        listType: String,
        httpRequest: {
            type: Function,
        },
        disabled: Boolean,
        limit: Number,
        onExceed: Function,
        // element-ui props end
        tips: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        clearFiles() {
            this.$refs.uploader.clearFiles()
        },
        abort(file) {
            this.$refs.uploader.abort(file)
        },
        submit() {
            this.$refs.uploader.submit()
        },
    }
}
</script>

<style>

</style>
