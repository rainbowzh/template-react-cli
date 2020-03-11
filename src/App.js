/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:57:46
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-09 17:22:36
 */
import React from 'react' ;
import { hot } from 'react-hot-loader/root' ;
import { Button ,Calendar} from 'antd';
import "./app.scss" ;


const App = () =>{
  const arr = [1,2,3,3,4] ;
  let newArr = new Set(arr) ;
  console.log("xx",[...newArr]) ;
  return(
    <div className="text">hello react
      <Button>click me2</Button>
      <Calendar/>
    </div>
  )
}

export default hot(App) ;