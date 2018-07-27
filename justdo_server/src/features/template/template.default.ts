export enum contentType {
    Todo = 'Todo' as any,
    Text = 'Text' as any,
    RichText = 'RichText' as any,
}
export const template = {
    name:'',
    startTime:'',
    endTime:'',
    child:[
        {
            name:'工作摘要',
            child:[
                {name:'未完成', child: [{content:contentType.Todo}]},
                {name:'已完成', child: [{content:contentType.Todo}]}
            ]
        },
        {
            name:'事项明细',
            content:contentType.RichText,
        }
    ]

};
