export enum contentType {
    Todo = 'Todo' as any,
    Text = 'Text' as any,
    RichText = 'RichText' as any,
}
export const template = {
    title:'',
    startTime:'',
    endTime:'',
    content:[
        {
            name:'工作摘要',
            content:[
                {type:contentType.Todo}
            ]
        },
        {
            name:'事项明细',
            content:[
                {type:contentType.RichText}
            ]
        }
    ]

};
