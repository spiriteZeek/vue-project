import { ref } from "vue";

const count = ref(10);
let preflag = "start";

let timer = setInterval(() => {
  count.value--;
  if (count.value === 0) {
    clearInterval(timer);
  }
}, 1000);

function clickBtn() {
  if (count.value > 0) {
    if (preflag === "start") {
      console.log("暂停")
      clearInterval(timer);
      preflag = "pause";
  
    } else if (preflag === "pause") {
      console.log("开始")
      timer = setInterval(() => {
        count.value--;
        if (count.value === 0) {
          clearInterval(timer);
        }
      }, 1000);
      preflag = "start";
    }
  } else {
    console.log("已经结束咧")
  }
  
}

export { count, clickBtn };
