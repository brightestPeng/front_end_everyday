let head = null,
  length = 0;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
 
  //添加
  append(value) {
    let node = new Node(value);
    if (length === 0) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  //插入
  insert(position, value) {
    let node = new Node(value),
      current = head,
      pre = null;
    if (position > 0 && position <= length) {
      if (position === 0) {
        head = node;
        node.next = current;
      } else {
          let i = 0;
          while(i++ < position){
            pre = current;
            current = current.next;
          }

          pre.next = node;
          node.next = current;
      }

      length++;
      return true
    }else{
      return false;
    }
  }

  //移除
  remove(position){
    let current = head,
        pre = null,
        index =0;

    if(position >= 0 && position < length){
        if(position === 0){
            head = current.next;
        }else{
            while(index ++ < position){
                pre = current;
                current = current.next;
            }

            pre.next = current.next;
        }

        length --;
        return current.value;
    }else{
        return null;
    }
  }

  //获得开头
  getHead(){
      return head;
  }

  //获得长度
  getLength(){
      return length;
  }

  //toString
  toString(){
      let current = head,
        string = "";

      while(current){
          string += current.value + (current.next ? "-":"");
          current = current.next;
      }

      return string;
  }
}
