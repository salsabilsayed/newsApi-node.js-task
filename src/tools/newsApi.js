const request = require('request');

const news = (callback) => {
   const newsUrl = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=c4d50f93836c4c2ea180a1bf448d6cfa';

   request({url:newsUrl,json:true},(error,response)=>{
       // low level error
       if(error){
           callback('Error occured!',undefined)
           //console.log('Error occured!');

       // response error    
       }else if(response.body.status === 'error'){
           callback(response.body.code,undefined)
            //console.log(response.body.code);
       }
       else if(response.body.articles.length === 0){
           callback('invalid parameter',undefined)
           //console.log('invalid parameter');
       }else{
           callback(undefined,response.body.articles);
          // console.log(response.body.articles);
       }
   })
}



module.exports = news;