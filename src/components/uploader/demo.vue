<template>
    <div>
        <Uploader 
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :tips="tips"
        >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </Uploader>
    </div>
</template>
<script>
    import Uploader from '../components/uploader/Uploader.vue';
    import tableTemp from '../components/uploader/tableTemp';

    export default {
        components: { Uploader },
        data () {
            return {
                fileList: [],
                tips: [
                    {
                        title: '一、上传文件说明',
                        // title(h) { 
                        //     return h('span', [ '一、上传文件说明' ])
                        // },
                        contents: [
                            {
                                text: '1.支持文件格式：.xls/.xlsx',
                            },
                            {
                                text: '2.上传数据条数限制：100条',
                            },
                            {
                                text: '3.请保证丢失设备PN/IMEI/MAC必填其一',
                            },
                            {
                                text: '4.丢失设备PN/机主最后使用时间列为必填项目',
                            },
                        ]
                    },
                    {
                        title: '二、文件参照格式',
                        // extra: '字符串形式',
                        extra(h) {
                            return h('a', { attrs: { href: 'https://baidu.com' } }, [ '点击下载设备追逃批量导入模板' ])
                        },
                        contents: [
                            {
                                render(h) {
                                    return h(tableTemp)
                                }
                            },
                        ]
                    },
                ],
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }
    }
</script>