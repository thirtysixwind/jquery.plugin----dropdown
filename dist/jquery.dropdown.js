;

(function($){

$.fn.dropdown = function(options){
	var defaultOptions = {
			content : [],
			positionX : '0',
			positionY : '100%',
			width : '',
			'line-height' : 1.5,
			'background-color' : 'white',
			'border-color' : '#ccc',
			'box-shadow' : true
		},
		settings = $.extend({}, defaultOptions, options);
		
	function createDropdownBox(itemList){//创建dropdown的ul元素，返回ul元素节点
		var boxNode = document.createElement('ul');

		var i;
		for(i = 0; i < itemList.length; i++){
			var itemNode = document.createElement('li');
			itemNode.innerHTML = itemList[i];
			boxNode.appendChild(itemNode);
		}
		return boxNode;
	}

	var i;
	for(i = 0; i < settings.content.length; i++){
		var dropdownBox = createDropdownBox(settings.content[i]);
		//插入dropdown的ul元素
		this[i].appendChild(dropdownBox);
		//当前元素相对定位
		this[i].style.position = 'relative';
		//dropdown的ul元素绝度定位，left和top值
		dropdownBox.style.position = 'absolute';
		dropdownBox.style.left = settings.positionX;
		dropdownBox.style.top = settings.positionY;
		//设置dropdown的ul元素宽度
		dropdownBox.style.width = settings.width || this.eq(i).css('width');
		//设置dropdown的ul元素行高
		dropdownBox.style.lineHeight = settings['line-height'];
		//设置dropdown的ul元素背景颜色
		dropdownBox.style.backgroundColor = settings['background-color'];
		//设置dropdown的ul元素边框
		dropdownBox.style.border = '1px solid #ccc';
		dropdownBox.style.borderColor = settings['border-color'];
		//设置dropdown的ul元素阴影
		if(settings['box-shadow']){
			dropdownBox.style.boxShadow = '0px 0px 4px rgba(0,0,0,.5)';
		}
		//设置dropdown的ul元素z-index
		dropdownBox.style.zIndex = 10;
		//设置dropdown的ul元素初始化隐藏
		dropdownBox.style.display = 'none';
		//设置dropdown的ul元素显示隐藏
		this[i].addEventListener('mouseover', (function(dropdownBox){
			return function(){
				dropdownBox.style.display = 'block';
			}
		})(dropdownBox));
		this[i].addEventListener('mouseout', (function(dropdownBox){
			return function(){
				dropdownBox.style.display = 'none';
			}
		})(dropdownBox));
	}




};

})(jQuery);









