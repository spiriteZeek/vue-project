import { ref } from 'vue';

const user = ref({name: 'outFile'})
const user1 = {name: ref('refInOutFile')}

setTimeout(() => {
  user.value.name = 'outFile2';
  const { name }= user1;
  name.value = 'refInOutFile2';
}, 2000);

export {
  user,
  user1,
}
