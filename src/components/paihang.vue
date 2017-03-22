<template lang="html">
  <div class="ph-items-list">
            <ul>
                <li class="ph-item border1px-bottom" v-for="ph in phList">
                  <router-link :to="{ name: 'wangyiyun', params: { pid: ph.pid }}" class="dp_block pr">
                    	<div class="ph-item-avat"><img :src="ph.imgUrl" alt=""></div>
                    	<p class="ph-item-text"><span>{{ph.phName}}</span></p>
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
    return{
      phList:[]
    }
  },
  mounted:function(){
    var _this = this;
    this.$nextTick(function(){
      _this.showList();
    })
  },
  methods:{
    showList(){
				// this.$store.commit('showLoading')
				var _this=this
				var oDiv=$("<div></div>");
				var phList=[];
				$.ajax({
					type:'get',
					url:apiPath.delegateUrl+apiPath.kugouRootPath+"/rank/list",
					success:function(data){
						oDiv.html(data);
						oDiv.find(".panel-img-list li").each(function(ind,ele){
							var imgUrl=$(ele).find(".panel-img-left img").attr("_src");
							var phName=$(ele).find(".panel-img-content p").text();
							var pid=$(ele).find("a").attr("href")
							// pid.replace('http://m.kugou.com/rank/info/',"")
							pid=pid.replace(/\D+/g,"")
							phList.push({imgUrl:imgUrl,phName:phName,pid:pid})

						})
						_this.phList=phList;
            console.log(phList)
						// _this.$store.commit('hideLoading')
					}
				})
			}
  }
}
</script>

<style lang="css">

</style>
