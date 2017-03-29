<template lang="html">
  <div class="ph-items-list">
            <ul>

                <li class="gd-item border1px-bottom" v-for="gd in gdList">
                   <router-link :to="{ name: 'wangyiyun', params: { pid: gd.gid,type:'gd' }}" class="dp_block pr">
                        <div class="ph-item-avat"><img :src="gd.imgUrl" alt=""></div>
                        <div class="ph-item-text">
                            <div class="gd-box">
                                <div class="vt">
                                    <span class="gd-name">{{gd.gdName}}</span>
                                    <span class=gd-host><i class="icon-ej"></i>{{gd.hit}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="ph-r-ico"></div>
                    </router-link>
                </li>
            </ul>
        </div>
</template>

<script>
import apiPath from "../js/apiConfig"
export default {
  data(){
    return {
      gdList:[]
    }
  },
  mounted:function () {
    var _this = this;
    this.$nextTick(function () {
      _this.showList();
      _this.$store.commit("isNavShowTrue");
    });
  },
    methods:{
      showList(){
        var _this=this
        var oDiv=$("<div></div>");
        var gdList=[];
        $.ajax({
          type:'get',
          url:apiPath.delegateUrl+apiPath.kugouRootPath+"/plist/index",
          success:function(data){
            oDiv.html(data);
            oDiv.find(".panel-img-list li").each(function(ind,ele){
              var imgUrl=$(ele).find(".panel-img-left img").attr("_src");
              var gdName=$(ele).find(".panel-img-content .panel-img-content-first").text();
              var hit=$(ele).find(".panel-img-content-sub").text()
              var gid=$(ele).find("a").attr("href")
              gid=gid.replace(/\D+/g,"")
              gdList.push({imgUrl:imgUrl,gdName:gdName,hit:hit,gid:gid})

            })
            _this.gdList=gdList;
          }
        })
      }
    }
}
</script>

<style lang="css" scoped>
  .dp_block{
    display: flex !important;
  }
</style>
