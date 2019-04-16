/**
 * Map 字典（也称映射）类型数据结构
 * 
 */


let items = {};

class Dictionary{

	//增加
	set(key,value){
		items[key] = value;
	}

	//返回
	get(key){
		return items[key];
	}

	//删除
	remove(key){
		if(items.hasOwnProperty(key)){
			delete items[key];
			return true;
		}
		return false;
	}

	//查
	has(key){
		return items.hasOwnProperty(key);
	}

}

export default Dictionary;