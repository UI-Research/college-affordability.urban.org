'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import d3 from 'd3';
import ExecutionEnvironment from 'exenv';
import util from 'util.jsx';

module.exports = {
  f: (pattern, zero = false, type = 'axis', data = null) => {
    let alt = "";
    let axisSmall = "";
    let axisBig = "";
    let zeroFormat = "";
    let p100 = "";
    let p1000 = "";
    let p10000 = "";
    let p100000 = "";
    let p1000000 = "";


    let postDecimalDigits = 0;
    let max = null;
    if(data != null && !data.data.sets){
      if(data.axis.y.max){
        max = data.axis.y.max
      }else{
        max = d3.max(data.data.columns, function(array) {
          return d3.max(array.map(function(o){ return +o}) );
        });
      }
      // if(data.axis.y.tick.format == "percent"){
      //   short = d3.max(data.data.columns, function(array){
      //     return array.map(function(o){
      //       if (isNaN(+o)){return 0}
      //       else { return o.toString().split(".")[1].length }
      //     })
      //   })
      // }else{
        postDecimalDigits = d3.max(
          d3.max(data.data.columns, function(array){
            return array.map(function(o){
              // console.log(o)
              if (o == null || isNaN(+o) || o.toString().search(/\./g) == -1){return 0}
              else { return o.toString().split(".")[1].length }
            })
          })
        )
      }
    // }


    if(pattern == 'dollar'){
        axisSmall = '$.2s';
        axisBig = '$.1s';
        zeroFormat = '$';
        p100 = (max < 100 && postDecimalDigits != 0) ? '$.1f' : '$f';
        p1000 = '$.2s';
        p10000 = '$.3s';
        p100000 = '$.4s';
        p1000000 = '$.3s';
    }
    else if(pattern == 'dollarCents'){
        axisSmall = '$.2s';
        axisBig = '$.1s';
        zeroFormat = '$';
        p100 = (max < 100 && postDecimalDigits != 0) ? '$.2f' : '$f';
        p1000 = '$.2s';
        p10000 = '$.3s';
        p100000 = '$.4s';
        p1000000 = '$.3s';
    }
    else if(pattern == 'percent'){
        axisSmall = '%';
        axisBig = '%';
        zeroFormat = '%';
        p100 = (postDecimalDigits == 2) ? '%' : '.1%';
        p1000 = '.%';
        p10000 = '.1%';
        p100000 = '.1%';
        p1000000 = '.1%';

    }
    else if(pattern == 'number'){

        axisSmall = '.2s'
        axisBig = '.1s'  
        zeroFormat = 'f';
        p100 = (max < 100 && postDecimalDigits != 0) ? '.1f' : 'f';
        p1000 = '.2s';
        p10000 = '.3s';
        p100000 = '.4s';
        p1000000 = '.3s';
    }



    // Additional formatting logic.
    return (v, id, i, j) => {
      // Hide data labels when window resizes to a smaller width.
      if (window.innerWidth < util.breakpointWidth('mid') && !zero) {
        return '';
      }
      if(type == "axis"){
        if(v == 0){
//Special format for 0 axis label ("0", not "0.0")
          pattern = zeroFormat;
        }else{
          if(max < 3000 && max != null){
//For axis labels such as 0, 500, 1.0k, 1.5k, 2.0k, 2.5k
            if(v < 10){
//For axis labels such as **5**, 10, 15, 20 (vs 5.0...)
              pattern = axisBig
            }else{
              pattern = axisSmall
            }
          }else{
//For axis labels such as -2k, -1k, 1k, 2k, 3k
//OR
//-2M, -1M, 1M, 2M
            if( (v > 9999 && v < 999999) || ( v < -9999 && v > -999999) ){
              pattern = axisSmall
            }else{
//For axis labels such as -45k, -15k, 45k, 150k, 250k etc.
              pattern = axisBig
            }
          }
        }
      }

// If empty, don't bother showing the labels.
// Prevents stacked charts from having values stack.
      if (v == 0 && type == "label") {
        return '';
      }

      // If values exceed a certain point, let's use the special
      // thousands/millions/billions formatter instead.



//For total accuracy, there are very narrow zones (e.g. 9949-9999) which are covered incorrectly
//For a very few edge cases in these zones, hard return the correct value
// 1 - 999 n $n
// 1000 - 9949 .2s $.2s
// 10000 - 99949 .3s $.3s
// 100000+ .4s $.4s
// 1000000+ .3s $.3s


//Single edge case, as described above
      if(v == 9990){
        return "$10.0k"
      }
      if (_.isNumber(v) && (v > 999999 || v < -999999) && type != "axis") {
        pattern = p1000000
      }
      else if (_.isNumber(v) && (v > 99999 || v < -99999)  && type != "axis") {
        pattern = p100000
      }
      else if (_.isNumber(v) && (v > 9999 || v < -9999) && type != "axis") {
        pattern = p10000
      }
      else if (_.isNumber(v) && (v > 999 || v < -999)  && type != "axis") {
        pattern = p1000
      }
      else if (type != "axis") {
        pattern = p100
      }
      return d3.format(pattern)(v);
      
     
      
      
    }
  }
}
