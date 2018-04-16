(function(){

	jQuery.extend({
		
		//func: html转义方法(encrypt 加密)
		//params: string
		//return: string
		"htmlEncode":function(str){
			var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&/g, "&amp;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/\"/g, "&quot;");
            return s;
		},

		//func: html转义方法(decode  加密)
		//params: string
		//return: string
		"htmlDecode":function(str){
			var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&amp;/g, "&");
            s = s.replace(/&lt;/g, "<");
            s = s.replace(/&gt;/g, ">");
            s = s.replace(/&quot;/g, "\"");
            return s;
		},

		//func: 通过参数名获取url中单个参数值
		//params: url参数名 string
		//return: url参数值 string			
		"getUrlParamValue":function(key){
			var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
   			var r = window.location.search.substr(1).match(reg);
   			if (r != null) {
       			return decodeURI(r[2]);
   			}
 			   	return null;
		},

		//func: 给日期增加1年时间
		//params: 日期字符串 string
		//return: 增加一年后日期，格式为：yyyy-mm-dd
		"AddYear": function(date){
			var d1 = new Date(date);
            var d2 = new Date(d1);
            d2.setFullYear(d2.getFullYear() + 1);
            d2.setDate(d2.getDate() - 1);
            var year = d2.getFullYear();
            var month = d2.getMonth() + 1;
            var day = d2.getDate();
            var time = year;
            if (month < 10) {
                time = time + "-0" + month;
            } else {
                time = time + "-" + month;
            }

            if (day < 10) {
                time = time + "-0" + day;
            } else {
                time = time + "-" + day;
            }
            return time;
		},

		/**
         * 对.net序列化后的时间格式进行转换
         * @param jsondate 参数名（形式为：/Date(1502294400000)/）       
         * @returns YY-MM-DD
         */
		"changeJsonDate":function(jsondate){
			jsondate = jsondate.replace("/Date(", "").replace(")/", "");
            if (jsondate.indexOf("+") > 0) {
                jsondate = jsondate.substring(0, jsondate.indexOf("+"));
            } else if (jsondate.indexOf("-") > 0) {
                jsondate = jsondate.substring(0, jsondate.indexOf("-"));
            }
            var date = new Date(parseInt(jsondate, 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + currentDate;
		},

		/**
         * 对js凭借html出现单双引号进行处理
         * @param string 参数名       
         * @returns 
         */
        "escapeHtml":function(string){
            var entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': '&quot;',
                "'": '&#39;',
                "/": '&#x2F;'
            };
            return String(string).replace(/[&<>"'\/]/g, function (s) {
                return entityMap[s];
            });
        }



	});
	
})(jQuery)