/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:57:46
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-12 14:21:46
 */
import React from 'react' ;
import { hot } from 'react-hot-loader/root' ;
import "./app.scss" ;


const App = () =>{
  const arr = [1,2,3,3,4] ;
  let newArr = new Set(arr) ;
  console.log("xx",[...newArr]) ;
  return(
    <div className="text">
      hello, welcome to rainbow's home
    </div>
  )
}

export default hot(App) ;