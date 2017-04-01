<template>
  <div class="inputer-cnt" id="inputer-cnt">
    <!--<VueImgInputer v-model="picValue" theme="light" size="small" :onChange="change"-->
                   <!--:imgSrc="imgSrc"></VueImgInputer>-->
    <div class="z_photo">
      <div class="z_file">
        <input  type="file" name="file" id="file" value="" accept="image/*" multiple @change="imgChange('z_photo','z_file');" />
      </div>
    </div>

    <div class="img_input" v-for="(img,index) in imgArr">
      <img :src="img" alt="" class="Img">
      <input type="text" :id="index">
    </div>
    <button @click="commit">commit</button>
  </div>
</template>
<script>
  import VueImgInputer from 'vue-img-inputer'
  export default{
      data(){
        return{
          picValue:"",
          imgSrc:"",
          imgArr:[]
        }
      },
    components: {
      VueImgInputer
    },
    methods:{
       imgChange(obj1, obj2) {
    //获取点击的文本框
         console.log(this.picValue,"picValue")
    var file = document.getElementById("file");
    //存放图片的父级元素
    var imgContainer = document.getElementById("inputer-cnt");
    //获取的图片文件
    var fileList = file.files;
    console.log(fileList,"fileList")
    //文本框的父级元素
    var input = document.getElementsByClassName(obj2)[0];
    var imgArr = [];
    //遍历获取到得图片文件
    for (let i = 0; i < fileList.length; i++) {
      var imgUrl = window.URL.createObjectURL(file.files[i]);
      imgArr.push(imgUrl);
//      var img = document.createElement("img");
//      img.setAttribute("src", imgArr[i]);
//      var imgAdd = document.createElement("div");
//      var input = document.createElement("input")
//      imgAdd.setAttribute("class", "z_addImg");
//      imgAdd.appendChild(img);
//      imgAdd.appendChild(input);
//      imgContainer.appendChild(imgAdd);
    };
         this.imgArr.push.apply(this.imgArr,imgArr);
//         this.imgArr = imgArr
         console.log(this.imgArr,"imgArr")
  },
//      removeItem(item){
//           var index = this.imgArr.indexOf(item);
//           this.imgArr.splice(index,1)
//      },
      commit(){
          var  valueArr = [];
        this.imgArr.forEach(function (value,index) {
            let text = {};
          let v = document.getElementById(index).value;
          text.v = v
          valueArr.push(text)
        });
        console.log(valueArr)
      }
    }
  }
</script>
<style>
  .inputer-cnt {
    margin-top: 100px;
  }
  .z_photo {
    width: 5rem;
    height: 5rem;
    padding: 0.3rem;
    overflow: auto;
    clear: both;
    margin: 1rem auto;
    border: 1px solid #555;
  }

  .z_photo img {
    width: 1rem;
    height: 1rem;
  }

  .z_addImg {
    float: left;
    margin-right: 0.2rem;
    height: 5rem;
    width: 5rem;
  }
  .z_addImg>img{
    width: 100%;
  }
.Img{
  width: 5rem;
  height: 5rem;
}
  .z_file {
    width: 1rem;
    height: 1rem;
    background: url('../assets/images/z_add.png') no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-right: 0.2rem;
  }

  .z_file input::-webkit-file-upload-button {
    width: 5rem;
    height: 5rem;
    border: none;
    position: absolute;
    outline: 0;
    opacity: 0;
  }

  .z_file input#file {
    display: block;
    width: auto;
    border: 0;
    vertical-align: middle;
  }
</style>
