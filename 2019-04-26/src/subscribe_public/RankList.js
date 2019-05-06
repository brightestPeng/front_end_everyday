let list = new Map();
let subscirbeList = [];
let RankList = [];

const update = (name, score) => {
  list.set(name, score);

  //自动排序
  RankList = Array.from(list);
  RankList.sort((a, b) => a[1] < b[1]);

  if (subscirbeList.length > 0) {
    subscirbeList.forEach(cb => cb(RankList));
  }
};

const subscirbe = fuc => {
    subscirbeList.push(fuc);
  //再次调用取消订阅
  return () => {
    return subscirbeList.filter(index => index !== fuc);
  };
};

export { subscirbe, update };
