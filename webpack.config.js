const path = require("path")
 const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports ={

 

       mode   :   "development" ,
       entry  :  path.resolve(__dirname,"src/index.js"),
       output : {

                 path : path.resolve(__dirname,"build"),
                 filename : "bundle.js",
                 clean:true

       } ,
       module:{
          rules:[{
               test:/\.js$/,
               exclude:/(node_modules)/,
               use:{
                    loader:"babel-loader",
                    options:{
                         presets:["@babel/preset-env"],
                    }
               }
          }
     
          ,{

          test:/\.(css|scss)$/i,
          use:['style-loader','css-loader','sass-loader' ]

          },
          {
               test:/\.(jpg|jpeg|png|svg|gif|webp)/,
               type:"asset/resource"

          }
     
     ]
       }
,

devServer:{


     static:{

          directory:path.resolve(__dirname,"build"),
          
     },
          port:3000,
          open:true,
          
          

},
plugins:[


            new HtmlWebpackPlugin({
            
                 title:"mini react",
                 filename:"index.html",
                 template:path.resolve(__dirname,"public/index.html")



            })


]


}