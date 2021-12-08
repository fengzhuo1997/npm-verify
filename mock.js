var Mock = require('mockjs')
var data = Mock.mock({
    'list|5': [{  // mock5条数据
        'id|+1': 1,
        'name' : "@name", // 随机长度为5的汉字字符转
        "age|18-60": 30,  
        "istrue|1": "boolean",
        'country': "@county(true)", // 随机中国地名
        'email': "@email", 
        'star|1-5': "⭐", // 随机star
        "cregion":"@region", // 中国区域
        "cprovince":"@province", // 中国省份
        "ccity":"@city", // 中国市区
        "ss":"@city(true)", // 省 + 市
        "code":"@zip",  // 邮政编码
        "goodsImg": "@Image('100x100','@color','小甜甜')", // 随机图片
        "description": "@ctitle(10)",
        "chinese": "@cparagraph(2)",
        "english": "@paragraph(3)",
        'array|3': [{  // mock3条数据
            'name' : "@name",
        }],
    }]
})
console.log(JSON.stringify(data, null, 4))


// https://www.jianshu.com/p/d812ce349265