import React from 'react';
import styles from './index.less';

export default () => {




const ok = (n:any) => {
  console.log('pp[pp[[')
let b = 1
let a = 1

for (let i = 0; i < n; i++) {
  [a, b] = [b, a+b]
}

console.log(a, '===')

return a;



}




  return (
    <div onClick={()=> ok(80)}>
      <h1  className={styles.title}>Page index000000000000</h1>
    </div>
    
  );
}
