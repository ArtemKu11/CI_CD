(function(){"use strict";var t={672:function(t,e,n){var i=n(963),r=n(252);function o(t,e,n,i,o,a){var l=(0,r.up)("TableWindow"),s=(0,r.up)("FiltersWindow"),u=(0,r.up)("FileOperationsWindow"),c=(0,r.up)("InfoAlert");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),t.filtersFlag?((0,r.wg)(),(0,r.j4)(s,{key:0})):(0,r.kq)("",!0),t.fileOperationsFlag?((0,r.wg)(),(0,r.j4)(u,{key:1})):(0,r.kq)("",!0),t.infoAlertFlag?((0,r.wg)(),(0,r.j4)(c,{key:2})):(0,r.kq)("",!0)],64)}var a={class:"table-window"},l=(0,r._)("div",{class:"header"},null,-1),s={class:"table-container"},u={key:0,class:"footer"},c={class:"navigation-buttons"};function f(t,e,n,i,o,f){var d=(0,r.up)("MainTable"),h=(0,r.up)("NoneFilesDiv"),g=(0,r.up)("SubmitButton");return(0,r.wg)(),(0,r.iD)("div",a,[l,(0,r._)("div",s,[t.filesExistFlag?((0,r.wg)(),(0,r.j4)(d,{key:0,modelValue:t.buttonsFlags,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.buttonsFlags=e}),currentPage:t.tablePage},null,8,["modelValue","currentPage"])):((0,r.wg)(),(0,r.j4)(h,{key:1}))]),t.filesExistFlag?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",c,[(0,r.Wm)(g,{activeFlag:t.buttonsFlags.prevButton,onButtonClick:t.prevClick,buttonText:"Назад"},null,8,["activeFlag","onButtonClick"]),(0,r.Wm)(g,{activeFlag:t.buttonsFlags.nextButton,onButtonClick:t.nextClick,buttonText:"Вперед"},null,8,["activeFlag","onButtonClick"])]),(0,r.Wm)(g,{activeFlag:!0,onButtonClick:t.filtersClick,buttonText:"Применить фильтры/загрузить"},null,8,["onButtonClick"])])):(0,r.kq)("",!0)])}var d={class:"table"},h=(0,r._)("col",{id:"col-1"},null,-1),g=(0,r._)("col",{id:"col-2"},null,-1),p=(0,r._)("col",{id:"col-3"},null,-1),m=(0,r._)("col",{id:"col-4"},null,-1),v=(0,r._)("col",{id:"col-5"},null,-1),w=(0,r._)("col",{id:"col-6"},null,-1),b=(0,r._)("thead",null,[(0,r._)("tr",{class:"table-header"},[(0,r._)("th",{class:"id_header",scope:"col"},"#"),(0,r._)("th",{class:"name_header",scope:"col"},"Имя"),(0,r._)("th",{class:"change-date_header",scope:"col"},"Дата изменения"),(0,r._)("th",{class:"upload-date_header",scope:"col"},"Дата загрузки"),(0,r._)("th",{class:"size_header",scope:"col"},"Размер"),(0,r._)("th",{class:"comment_header",scope:"col"},"Комментарий")])],-1);function k(t,e,n,i,o,a){var l=(0,r.up)("TableRow");return(0,r.wg)(),(0,r.iD)("table",d,[h,g,p,m,v,w,b,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.getCurrentPage,(function(t,e){return(0,r.wg)(),(0,r.j4)(l,{key:e,dataModel:t},null,8,["dataModel"])})),128))])])}var F=n(577),C={class:"id_row"},y={class:"name_row"},_={class:"change-date_row"},M={class:"upload-date_row",row:""},T={class:"size_row"},D={class:"comment_row"};function A(t,e,n,i,o,a){var l,s,u,c,f,d;return(0,r.wg)(),(0,r.iD)("tr",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.clickHandler&&t.clickHandler.apply(t,e)})},[(0,r._)("th",C,(0,F.zw)(null===(l=t.dataModel)||void 0===l?void 0:l.id),1),(0,r._)("td",y,(0,F.zw)(null===(s=t.dataModel)||void 0===s?void 0:s.name),1),(0,r._)("td",_,(0,F.zw)(null===(u=t.dataModel)||void 0===u?void 0:u.changeDate),1),(0,r._)("td",M,(0,F.zw)(null===(c=t.dataModel)||void 0===c?void 0:c.uploadDate),1),(0,r._)("td",T,(0,F.zw)(null===(f=t.dataModel)||void 0===f?void 0:f.size),1),(0,r._)("td",D,(0,F.zw)(null===(d=t.dataModel)||void 0===d?void 0:d.comment),1)])}var O=(0,r.aZ)({name:"TableRow",props:{dataModel:Object},mounted:function(){},computed:{getDataModel:function(){return this.dataModel}},methods:{clickHandler:function(){this.$store.dispatch("fileOperations/reset"),this.$store.dispatch("fileOperations/setDataModel",this.getDataModel),this.$store.commit("windowFlags/setFileOperationsFlag",!0)}}}),$=n(744);const j=(0,$.Z)(O,[["render",A]]);var P=j,H=(0,r.aZ)({name:"MainTable",components:{TableRow:P},props:{currentPage:{type:Number,default:1},modelValue:Object},methods:{getPage:function(t){var e=10*t;return this.files&&this.files.length&&this.files.length>e?this.files.slice(e,e+10):[]},refreshModelValue:function(){if(this.modelValue){var t={prevButton:!this.isItFirstPage,nextButton:!this.isItLastPage};this.$emit("update:modelValue",t)}}},computed:{files:function(){return this.$store.getters["table/getFiles"]()},isItFirstPage:function(){return 1===this.currentPage},isItLastPage:function(){var t=this.files;if(t&&t.length){var e=Math.ceil(t.length/10);return this.currentPage===e}return!0},getCurrentPage:function(){return this.getPage(this.currentPage-1)}},watch:{currentPage:function(){this.refreshModelValue()},files:function(){this.refreshModelValue()}},created:function(){this.refreshModelValue()}});const x=(0,$.Z)(H,[["render",k]]);var I=x;function S(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("button",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.clickHandler&&t.clickHandler.apply(t,e)})},(0,F.zw)(t.buttonText),1)}var B=(0,r.aZ)({name:"DefaultButton",props:{buttonText:String,activeFlag:Boolean},methods:{clickHandler:function(){this.activeFlag&&this.$emit("buttonClick")}}});const W=(0,$.Z)(B,[["render",S],["__scopeId","data-v-17a2bb51"]]);var Z=W,V={class:"none-files-div"},z=(0,r._)("span",null,"Файлов не найдено",-1);function Q(t,e,n,i,o,a){var l=(0,r.up)("DefaultButton");return(0,r.wg)(),(0,r.iD)("div",V,[z,t.filters?((0,r.wg)(),(0,r.j4)(l,{key:0,onClick:t.filtersClick,buttonText:"Применить фильтры/загрузить"},null,8,["onClick"])):((0,r.wg)(),(0,r.j4)(l,{key:1,buttonText:"Загрузить"}))])}var E=(0,r.aZ)({name:"NoneFilesDiv",components:{DefaultButton:Z},methods:{filtersClick:function(){this.$store.commit("windowFlags/setFiltersFlag",!0)}},computed:{filters:function(){return this.$store.getters["filters/getFilters"]}}});const R=(0,$.Z)(E,[["render",Q]]);var L=R,N=(0,r.aZ)({name:"TableWindow",components:{MainTable:I,SubmitButton:Z,NoneFilesDiv:L},data:function(){return{tablePage:1,buttonsFlags:{prevButton:!1,nextButton:!1}}},methods:{prevClick:function(){this.tablePage--},nextClick:function(){this.tablePage++},filtersClick:function(){this.$store.commit("windowFlags/setFiltersFlag",!0)}},computed:{files:function(){var t=this.$store.getters["table/getFiles"]();return t.length>10?t.slice(0,10):t},filesExistFlag:function(){var t;return Boolean(null===(t=this.$store.getters["table/getFiles"]())||void 0===t?void 0:t.length)}},watch:{files:function(){this.tablePage=1}}});const J=(0,$.Z)(N,[["render",f]]);var U=J,G={class:"filters-window"},q={class:"filters-alert"},Y={class:"wrapper"},K=(0,r._)("span",null,"От: ",-1),X={class:"wrapper"},tt=(0,r._)("span",null,"До: ",-1),et={class:"wrapper"},nt=(0,r._)("span",null,"Имя: ",-1),it={class:"wrapper"},rt=(0,r._)("span",null,"Тип: ",-1),ot={class:"button-wrapper"};function at(t,e,n,o,a,l){var s=(0,r.up)("SubmitButton");return(0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("div",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.closeClick&&t.closeClick.apply(t,e)}),class:"closeModal"}),(0,r._)("div",q,[(0,r._)("div",Y,[K,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filters.from=e}),type:"date"},null,512),[[i.nr,t.filters.from]])]),(0,r._)("div",X,[tt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.filters.to=e}),type:"date"},null,512),[[i.nr,t.filters.to]])]),(0,r._)("div",et,[nt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.filters.name=e}),type:"text"},null,512),[[i.nr,t.filters.name]])]),(0,r._)("div",it,[rt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.filters.type=e}),type:"text"},null,512),[[i.nr,t.filters.type]])]),(0,r._)("div",ot,[(0,r.Wm)(s,{onClick:t.confirmHandler,buttonText:"Применить"},null,8,["onClick"]),(0,r.Wm)(s,{onClick:t.resetClick,buttonText:"Сбросить"},null,8,["onClick"]),(0,r.Wm)(s,{onClick:t.activateForm,buttonText:"Загрузить"},null,8,["onClick"])])]),(0,r._)("input",{ref:"input",onChange:e[5]||(e[5]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.fileFormChange&&t.fileFormChange.apply(t,e)}),id:"fileform",type:"file"},null,544)])}var lt=n(655),st=function(){function t(){Object.defineProperty(this,"dispatch",{enumerable:!0,configurable:!0,writable:!0,value:null})}return Object.defineProperty(t.prototype,"showInfoAlert",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.dispatch&&this.dispatch("alerts/showInfoAlert",t,{root:!0})}}),t}(),ut=new st,ct=n(154),ft=function(){var t=ct.Z.create({});return t.interceptors.response.use((function(t){return t}),(function(t){var e;if(null===(e=t.response)||void 0===e?void 0:e.data){var n=t.response.data,i={message:n.message,time:2e3,type:"red"};ut.showInfoAlert(i)}else{i={message:"Неизвестная ошибка",time:2e3,type:"red"};if(t.code)switch(t.code){case"ERR_NETWORK":i.message="Сервер недоступен. Проверьте правильность URL";break;default:break}else ut.showInfoAlert(i)}})),t},dt=ft(),ht=(0,r.aZ)({name:"FiltersWindow",components:{SubmitButton:Z},computed:{filters:function(){console.log("here");var t=this.$store.getters["filters/getFilters"];if(t){var e=JSON.parse(JSON.stringify(t));if(e.from){var n=e.from.split("_");e.from=n[0]}if(e.to){var i=e.to.split("_");e.to=i[0]}return e}return{from:"",name:"",to:"",type:""}},filtersInState:function(){return this.$store.getters["filters/getFilters"]}},methods:{activateForm:function(){var t=this.$refs.input;t&&t.click()},fileFormChange:function(t){return(0,lt.mG)(this,void 0,void 0,(function(){var e,n,i,r,o;return(0,lt.Jh)(this,(function(a){switch(a.label){case 0:return e=t.target,n=e.files,n&&n.length?(i=new FormData,i.append("file",n[0]),[4,dt.post("files/new/formdata",i)]):[3,2];case 1:r=a.sent(),r&&r.status&&200===r.status&&(o={message:"Загружено успешно",time:1500,type:"green"},ut.showInfoAlert(o),this.refresh()),a.label=2;case 2:return[2]}}))}))},refresh:function(){this.$store.commit("windowFlags/setFiltersFlag",!1),this.filtersInState?this.$store.dispatch("table/loadFiles",this.filtersInState):this.$store.dispatch("table/loadFiles")},closeClick:function(){this.$store.commit("windowFlags/setFiltersFlag",!1)},resetClick:function(){this.$store.dispatch("filters/reset"),this.$store.dispatch("table/loadFiles"),this.closeClick();var t={message:"Фильры сброшены",type:"green",time:1500};ut.showInfoAlert(t)},confirmHandler:function(){var t={};if(this.filters.from){var e=this.handleDate(this.filters.from);this.filters.from=e,t.from=e+"_00:00"}if(this.filters.to){var n=this.handleDate(this.filters.to);this.filters.to=n,t.to=n+"_00:00"}this.filters.name&&(t.name=this.filters.name),this.filters.type&&(t.type=this.filters.type),this.$store.dispatch("filters/reset"),Object.keys(t).length?(this.$store.dispatch("filters/setFilters",t),this.$store.dispatch("table/loadFiles",t)):this.$store.dispatch("table/loadFiles"),this.closeClick()},handleDate:function(t){var e=t.split("-"),n=new Date,i=n.getFullYear();return+e[0]>i&&(e[0]=i+""),e.join("-")}}});const gt=(0,$.Z)(ht,[["render",at]]);var pt=gt,mt={class:"file-operations-window"};function vt(t,e,n,i,o,a){var l=(0,r.up)("MainContainer"),s=(0,r.up)("InputContainer");return(0,r.wg)(),(0,r.iD)("div",mt,[(0,r._)("div",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.closeClick&&t.closeClick.apply(t,e)}),class:"closeModal"}),t.inputContainerFlag?((0,r.wg)(),(0,r.j4)(s,{key:1,onRefreshEverything:t.refresh},null,8,["onRefreshEverything"])):((0,r.wg)(),(0,r.j4)(l,{key:0,onDownloadClick:t.downloadClickHandler,onDeleteClick:t.deleteClickHandler,onCommentClick:t.commentClickHandler},null,8,["onDownloadClick","onDeleteClick","onCommentClick"]))])}var wt={class:"container"},bt={class:"header"},kt={class:"buttons-container"};function Ft(t,e,n,i,o,a){var l=(0,r.up)("SubmitButton");return(0,r.wg)(),(0,r.iD)("div",wt,[(0,r._)("span",bt,(0,F.zw)(t.dataModel.name),1),(0,r._)("div",kt,[(0,r.Wm)(l,{onClick:t.downloadClick,buttonText:"Скачать"},null,8,["onClick"]),(0,r.Wm)(l,{onClick:t.commentClickHandler,buttonText:"Изменить"},null,8,["onClick"]),(0,r.Wm)(l,{onClick:t.deleteClickHandler,buttonText:"Удалить"},null,8,["onClick"])])])}var Ct=(0,r.aZ)({name:"MainContainer",components:{SubmitButton:Z},methods:{downloadClick:function(){this.$emit("downloadClick")},commentClickHandler:function(){this.$emit("commentClick")},deleteClickHandler:function(){this.$emit("deleteClick")}},computed:{dataModel:function(){return this.$store.getters["fileOperations/getDataModel"]}}});const yt=(0,$.Z)(Ct,[["render",Ft],["__scopeId","data-v-24651e41"]]);var _t=yt,Mt=function(t){return(0,r.dD)("data-v-7803b4e6"),t=t(),(0,r.Cn)(),t},Tt={class:"container"},Dt=Mt((function(){return(0,r._)("span",{class:"header"},"Введите новый комментарий",-1)}));function At(t,e,n,o,a,l){var s=(0,r.up)("SubmitButton");return(0,r.wg)(),(0,r.iD)("div",Tt,[Dt,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.inputModel=e}),type:"text"},null,512),[[i.nr,t.inputModel]]),(0,r.Wm)(s,{onClick:t.clickHandler,buttonText:"Сохранить"},null,8,["onClick"])])}var Ot=(0,r.aZ)({name:"InputContainer",components:{SubmitButton:Z},data:function(){return{inputModel:""}},computed:{dataModel:function(){return this.$store.getters["fileOperations/getDataModel"]}},methods:{clickHandler:function(){return(0,lt.mG)(this,void 0,void 0,(function(){var t,e,n;return(0,lt.Jh)(this,(function(i){switch(i.label){case 0:return t={comment:this.inputModel},[4,dt.patch("files/".concat(this.dataModel.id),t)];case 1:return e=i.sent(),e&&e.status&&200===e.status&&(n={message:"Изменено",type:"green",time:1500},ut.showInfoAlert(n),this.$emit("refreshEverything")),[2]}}))}))}}});const $t=(0,$.Z)(Ot,[["render",At],["__scopeId","data-v-7803b4e6"]]);var jt=$t,Pt=(0,r.aZ)({name:"FileOperationsWindow",data:function(){return{inputContainerFlag:!1}},components:{MainContainer:_t,InputContainer:jt},methods:{downloadClickHandler:function(){return(0,lt.mG)(this,void 0,void 0,(function(){return(0,lt.Jh)(this,(function(t){return location.href="files/".concat(this.dataModel.id),this.closeClick(),[2]}))}))},deleteClickHandler:function(){return(0,lt.mG)(this,void 0,void 0,(function(){var t,e;return(0,lt.Jh)(this,(function(n){switch(n.label){case 0:return[4,dt["delete"]("files/".concat(this.dataModel.id))];case 1:return t=n.sent(),t&&t.status&&200===t.status&&(e={message:"Удалено",type:"red",time:1500},ut.showInfoAlert(e),this.refresh()),[2]}}))}))},closeClick:function(){this.inputContainerFlag?this.inputContainerFlag=!1:this.$store.commit("windowFlags/setFileOperationsFlag",!1)},commentClickHandler:function(){this.inputContainerFlag=!0},refresh:function(){this.$store.commit("windowFlags/setFileOperationsFlag",!1),this.filters?this.$store.dispatch("table/loadFiles",this.filters):this.$store.dispatch("table/loadFiles")}},computed:{filters:function(){return this.$store.getters["filters/getFilters"]},dataModel:function(){return this.$store.getters["fileOperations/getDataModel"]}}});const Ht=(0,$.Z)(Pt,[["render",vt]]);var xt=Ht,It=["innerHTML"];function St(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.clickHandler&&t.clickHandler.apply(t,e)}),ref:"infoAlert",class:(0,F.C_)(["info-alert",{green:t.green,red:t.red}])},[(0,r._)("span",{class:"message-holder",innerHTML:t.infoAlert.message},null,8,It)],2)}var Bt=(0,r.aZ)({name:"InfoAlert",data:function(){return{currentTimeout:0}},computed:{infoAlert:{get:function(){return this.$store.getters["alerts/getInfoAlert"]()},set:function(t){this.$store.state.alerts.infoAlertState.currentMessage=t}},cancellationToken:function(){return this.$store.state.alerts.infoAlertState.cancellationToken},green:function(){var t;return"green"===(null===(t=this.infoAlert.type)||void 0===t?void 0:t.toLowerCase())},red:function(){var t;return"red"===(null===(t=this.infoAlert.type)||void 0===t?void 0:t.toLowerCase())}},watch:{cancellationToken:function(){this.cancellationToken&&(this.currentTimeout&&clearTimeout(this.currentTimeout),this.infoAlert=null)}},mounted:function(){this.showingAnimation()},methods:{showingAnimation:function(){var t=this.$refs.infoAlert;if(t){var e=t.getBoundingClientRect().height;this.animationProcessing(t,e);var n=5e3;this.infoAlert.time&&(n=this.infoAlert.time),this.currentTimeout=setTimeout(this.closingAnimation,n)}},animationProcessing:function(t,e){var n=this;e<0||(t.style.top=-e+"px",this.currentTimeout=setTimeout((function(){e-=2,n.animationProcessing(t,e)}),0))},closingAnimation:function(){var t=this.$refs.infoAlert;if(t){var e=t.getBoundingClientRect().height;this.closingAnimationProcessing(t,0,e)}},closingAnimationProcessing:function(t,e,n){var i=this;e-=2,e<-n?this.infoAlert=null:(t.style.top=e+"px",this.currentTimeout=setTimeout((function(){i.closingAnimationProcessing(t,e,n)}),0))},clickHandler:function(){var t={message:this.infoAlert.message,type:"ok"};this.$store.dispatch("ourExtension/layoutsData/alerts/addToAlertQueue",t)}}});const Wt=(0,$.Z)(Bt,[["render",St]]);var Zt=Wt,Vt=(0,r.aZ)({name:"App",components:{TableWindow:U,FiltersWindow:pt,FileOperationsWindow:xt,InfoAlert:Zt},created:function(){this.$store.dispatch("table/loadFiles"),ut.dispatch=this.$store.dispatch},computed:{filtersFlag:function(){return this.$store.getters["windowFlags/getFiltersFlag"]},fileOperationsFlag:function(){return this.$store.getters["windowFlags/getFileOperationsFlag"]},infoAlertFlag:function(){return this.$store.getters["alerts/getInfoAlertFlag"]()}}});const zt=(0,$.Z)(Vt,[["render",o]]);var Qt=zt,Et=n(907),Rt=function(){return{dataModels:[]}},Lt=Rt(),Nt=function(){function t(){}return Object.defineProperty(t.prototype,"jsDateToFullHuman",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=this.jsDateToHuman(t),n=this.convertToHumanTime(t);return e+" "+n}}),Object.defineProperty(t.prototype,"convertToHumanTime",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){var n=t.getHours()+"",i=t.getMinutes()+"";if(1===n.length&&(n="0"+n),1===i.length&&(i="0"+i),e){var r=t.getSeconds()+"";return 1===r.length&&(r="0"+r),"".concat(n,":").concat(i,":").concat(r)}return"".concat(n,":").concat(i)}}),Object.defineProperty(t.prototype,"jsDateToHuman",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=t.getDate().toString(),n=t.getMonth()+1+"";return 1===e.length&&(e="0"+e),1===n.length&&(n="0"+n),"".concat(e,".").concat(n,".").concat(t.getFullYear())}}),t}(),Jt=new Nt,Ut=function(t){return Math.round(10*+t)/10},Gt=function(t){if(isNaN(parseInt(t+"")))return"?";var e=Math.round(t/1e3);if(e<1e3)return e+"kb";var n=Ut(e/1e3);if(n<1e3)return n+"MB";var i=Ut(n/1e3);return i+"GB"},qt=function(){function t(){}return Object.defineProperty(t.prototype,"isSatisfiesDataModelType",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e={changeDate:"",comment:"",downloadLink:"",id:0,name:"",size:0,type:"",uploadDate:""},n=Object.keys(e);for(var i in t){var r=n.indexOf(i);-1!=r&&n.splice(r,1)}return 0===n.length}}),Object.defineProperty(t.prototype,"mapDataModelToClientDataModel",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return{id:t.id,name:t.name,type:t.type,size:Gt(t.size),uploadDate:Jt.jsDateToFullHuman(new Date(t.uploadDate)),changeDate:Jt.jsDateToFullHuman(new Date(t.changeDate)),downloadLink:t.downloadLink,comment:t.comment}}}),Object.defineProperty(t.prototype,"cutWord",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){return(null===t||void 0===t?void 0:t.length)>e?t.slice(0,e)+"...":t}}),t}(),Yt=new qt,Kt={loadFiles:function(t,e){var n=t.state;return(0,lt.mG)(this,void 0,void 0,(function(){var t,i,r,o,a,l;return(0,lt.Jh)(this,(function(s){switch(s.label){case 0:return t="files",e&&(t+="?",e.from&&(t+="from="+e.from),e.to&&(t.endsWith("?")||(t+="&"),t+="to="+e.to),e.name&&(t.endsWith("?")||(t+="&"),t+="name="+e.name),e.type&&(t.endsWith("?")||(t+="&"),t+="type="+e.type)),[4,dt.get(t)];case 1:if(i=s.sent(),null===i||void 0===i?void 0:i.data)for(n.dataModels=[],r=i.data,o=0,a=r;o<a.length;o++)l=a[o],n.dataModels.push(Yt.mapDataModelToClientDataModel(l));return[2]}}))}))}},Xt={getFiles:function(t){return function(){return t.dataModels}}},te=!0,ee={namespaced:te,state:Lt,actions:Kt,getters:Xt},ne=function(){return{filtersFlag:!1,fileOperationsFlag:!1}},ie=ne(),re={setFiltersFlag:function(t,e){t.filtersFlag=e},setFileOperationsFlag:function(t,e){t.fileOperationsFlag=e}},oe={getFiltersFlag:function(t){return t.filtersFlag},getFileOperationsFlag:function(t){return t.fileOperationsFlag}},ae=!0,le={namespaced:ae,state:ie,getters:oe,mutations:re},se=function(){return{dataModel:null}},ue=se(),ce={getDataModel:function(t){return t.dataModel}},fe={setDataModel:function(t,e){var n=t.state;n.dataModel=e},reset:function(t){var e=t.state;Object.assign(e,se())}},de=!0,he={namespaced:de,state:ue,actions:fe,getters:ce},ge=function(){return{currentFilters:null}},pe=ge(),me={setFilters:function(t,e){var n=t.state;n.currentFilters=e},reset:function(t){var e=t.state;Object.assign(e,ge())}},ve={getFilters:function(t){return t.currentFilters}},we=!0,be={namespaced:we,state:pe,actions:me,getters:ve},ke=function(){return{alertQueue:[],infoAlertState:{cancellationToken:!1,currentMessage:null}}},Fe=ke(),Ce={addToAlertQueue:function(t,e){var n=t.state;n.alertQueue.push(e)},confirmClick:function(t){var e=t.state,n=e.alertQueue[0];n&&n.confirmCallback&&n.confirmCallback(),e.alertQueue.shift()},rejectClick:function(t){var e=t.state,n=e.alertQueue[0];n&&n.rejectCallback&&n.rejectCallback(),e.alertQueue.shift()},showInfoAlert:function(t,e){var n=t.state,i=t.dispatch;if(n.infoAlertState.currentMessage)return n.infoAlertState.cancellationToken=!0,void setTimeout((function(){i("showInfoAlert",e)}),10);n.infoAlertState.cancellationToken=!1,n.infoAlertState.currentMessage=e},onSocketError:function(t,e){var n,i=t.dispatch,r=e.message;if(r){var o=r.message;n=o?{message:o,type:"red"}:{message:r,type:"red"}}else n={message:e,type:"red"};var a=n.message.split("\\n").join("<br>");n.message=a,i("showInfoAlert",n)}},ye={getAlertQueue:function(t){return t.alertQueue},getAlertFlag:function(t){return function(){return Boolean(t.alertQueue.length)}},getFirstAlert:function(t){return function(){return t.alertQueue[0]}},getInfoAlertCancellationToken:function(t){return function(){return t.infoAlertState.cancellationToken}},getInfoAlert:function(t){return function(){return t.infoAlertState.currentMessage}},getInfoAlertFlag:function(t){return function(){return Boolean(t.infoAlertState.currentMessage)}}},_e=!0,Me={namespaced:_e,state:Fe,actions:Ce,getters:ye},Te=(0,Et.MT)({getters:{},mutations:{},actions:{},modules:{table:ee,windowFlags:le,fileOperations:he,filters:be,alerts:Me}});n(734);(0,i.ri)(Qt).use(Te).mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],l=i[1],s=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(e&&e(i);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkspring_app_frontend"]=self["webpackChunkspring_app_frontend"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(672)}));i=n.O(i)})();
//# sourceMappingURL=app.ad8a27c6.js.map